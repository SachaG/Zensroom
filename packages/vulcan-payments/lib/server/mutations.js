import { addGraphQLSchema, addGraphQLResolvers, addGraphQLMutation, Collections, addCallback } from 'meteor/vulcan:core';
// import Users from 'meteor/vulcan:users';
import { createCharge } from '../server/integrations/stripe.js';


function initChargeable () {

  const resolver = {
    Mutation: {
      async createChargeMutation(root, args, context) {
        return await createCharge(args);
      },
    },
  };
  addGraphQLResolvers(resolver);
  addGraphQLMutation('createChargeMutation(token: JSON, userId: String, productKey: String, associatedCollection: String, associatedId: String, properties: JSON, coupon: String) : Chargeable');

  const chargeableSchema = `
    union Chargeable = ${Collections.map(collection => collection.typeName).join(' | ')}
  `;
  addGraphQLSchema(chargeableSchema);

  const resolverMap = {
    Chargeable: {
      __resolveType(obj, context, info){
        return obj.__typename || null;
      },
    },
  };
  addGraphQLResolvers(resolverMap);
  
  return {}
}

addCallback('apollo.init', initChargeable);
