import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import resolvers from './resolvers.js';
import './fragments.js';
import mutations from './mutations.js';
import './permissions.js';
import './parameters.js';

const Properties = createCollection({
  collectionName: 'Properties',
  typeName: 'Properties',
  schema,
  resolvers,
  mutations,
});

export default Properties;