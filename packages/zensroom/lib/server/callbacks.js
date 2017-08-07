/*

Server callbacks

See: http://docs.vulcanjs.org/callbacks.html

*/

import { addCallback } from 'meteor/vulcan:core';
import { geocode } from 'meteor/vulcan:maps';

const geoFields = ['address', 'address2', 'state', 'city', 'zipCode', 'country'];

const getAddressString = document => _.compact(geoFields.map(field => document[field])).join(' ');

function setBookingPaidAt (modifier, post, charge) {
  modifier.$set.paidAt = new Date();
  return modifier;
}
addCallback('bookings.charge.sync', setBookingPaidAt);

async function geocodeAddressOnNewRoom (document, currentUser) {
  console.log('// geocodeAddressOnNewRoom')
  if (_.some(geoFields, field => !!document[field])) {
    console.log(getAddressString(document))
    try {
      const geoData = await geocode(getAddressString(document));
      console.log(geoData)
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


async function geocodeAddressOnEditRoom (modifier, document, currentUser) {
  console.log('// geocodeAddressOnEditRoom')
  if (_.some(geoFields, field => modifier.$set[field] && modifier.$set[field] !== document[field])) {
    console.log(getAddressString(modifier.$set))
    try {
      const geoData = await geocode(getAddressString(modifier.$set));
      console.log(geoData)
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
