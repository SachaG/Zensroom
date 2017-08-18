/*

Rooms collection

http://docs.vulcanjs.org/schemas.html

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';
import './parameters.js';
import './callbacks.js';

const Rooms = createCollection({
  collectionName: 'Rooms',
  typeName: 'Room',
  schema,
  resolvers: getDefaultResolvers('Rooms'),
  mutations: getDefaultMutations('Rooms'),
});

export default Rooms;