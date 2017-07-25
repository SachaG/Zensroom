import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';
import './parameters.js';

const Rooms = createCollection({
  collectionName: 'Rooms',
  typeName: 'Rooms',
  schema,
  resolvers: getDefaultResolvers('Rooms'),
  mutations: getDefaultMutations('Rooms'),
});

export default Rooms;