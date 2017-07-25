import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import resolvers from './resolvers.js';
import './fragments.js';
import mutations from './mutations.js';
import './permissions.js';
import './parameters.js';

const Reviews = createCollection({
  collectionName: 'Reviews',
  typeName: 'Reviews',
  schema,
  resolvers,
  mutations,
});

export default Reviews;