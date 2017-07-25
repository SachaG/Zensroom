import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';
import './parameters.js';

const Reviews = createCollection({
  collectionName: 'Reviews',
  typeName: 'Reviews',
  schema,
  resolvers: getDefaultResolvers('Reviews'),
  mutations: getDefaultMutations('Reviews'),
});

export default Reviews;