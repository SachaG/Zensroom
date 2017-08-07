/*

Bookings collection

http://docs.vulcanjs.org/schemas.html

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';
import './resolvers.js';

const Bookings = createCollection({
  collectionName: 'Bookings',
  typeName: 'Booking',
  schema,
  resolvers: getDefaultResolvers('Bookings'),
  mutations: getDefaultMutations('Bookings'),
});

// only admins or the owner can access a booking
Bookings.checkAccess = (currentUser, booking) => {
  return Users.isAdmin(currentUser) || Users.owns(currentUser, booking);
}

export default Bookings;