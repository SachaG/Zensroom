import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';
import './parameters.js';
import './resolvers.js';

const Bookings = createCollection({
  collectionName: 'Bookings',
  typeName: 'Booking',
  schema,
  resolvers: getDefaultResolvers('Bookings'),
  mutations: getDefaultMutations('Bookings'),
});

export default Bookings;