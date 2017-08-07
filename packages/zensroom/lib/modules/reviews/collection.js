/*

Reviews collection

http://docs.vulcanjs.org/schemas.html

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './permissions.js';
import { newCheck } from './check';

const Reviews = createCollection({
  collectionName: 'Reviews',
  typeName: 'Review',
  schema,
  resolvers: getDefaultResolvers('Reviews'),
  mutations: getDefaultMutations('Reviews', { newCheck }),
});

export default Reviews;