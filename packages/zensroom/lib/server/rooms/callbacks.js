/*

Server callbacks

See: http://docs.vulcanjs.org/callbacks.html

*/

import { addCallback } from 'meteor/vulcan:core';
import { geocode } from 'meteor/vulcan:maps';
import Users from 'meteor/vulcan:users';
import VulcanEmail from 'meteor/vulcan:email';

const geoFields = ['address', 'address2', 'state', 'city', 'zipCode', 'country'];

const getAddressString = document => _.compact(geoFields.map(field => document[field])).join(' ');

/*

When a new room is created, geocode its address

*/
async function geocodeAddressOnNewRoom (document, currentUser) {
  if (_.some(geoFields, field => !!document[field])) {
    try {
      const geoData = await geocode(getAddressString(document));
      document = {
        ...document,
        geoData,
        location: {
          type: 'Point',
          coordinates: [geoData.geometry.location.lng, geoData.geometry.location.lat]
        }
      }
    } catch (error) {
      console.log('//geoData error')
      console.log(error)
    }
  }
  return document;
}
addCallback('rooms.new.sync', geocodeAddressOnNewRoom);

/*

When a room is edited, geocode its address

*/
async function geocodeAddressOnEditRoom (modifier, document, currentUser) {
  if (_.some(geoFields, field => modifier.$set[field] && modifier.$set[field] !== document[field])) {
    try {
      const geoData = await geocode(getAddressString(modifier.$set));
      modifier.$set = {
        ...modifier.$set,
        geoData,
        location: {
          type: 'Point',
          coordinates: [geoData.geometry.location.lng, geoData.geometry.location.lat]
        }
      }
    } catch (error) {
      console.log('//geoData error')
      console.log(error)
    }
  }
  return modifier;
}
addCallback('rooms.edit.sync', geocodeAddressOnEditRoom);

/*

When a new room is created, send a notification to all admins

*/
async function RoomsNewNotifications (room) {

  const adminUsers = Users.find({isAdmin : true, _id: {$ne: room.userId}}).fetch();
  const emails = _.compact(_.pluck(adminUsers, 'email'));

  await VulcanEmail.buildAndSend({
    to: emails, 
    emailName: 'roomsNew', 
    variables: { documentId: room._id}
  });

}
addCallback('rooms.new.async', RoomsNewNotifications);
