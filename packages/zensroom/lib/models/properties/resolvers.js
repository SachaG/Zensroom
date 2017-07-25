import { addGraphQLResolvers } from 'meteor/vulcan:core';

const resolvers = {
  list: {
    name: 'propertiesList',
    resolver(root, { terms = {} }, context, info) {
      let { selector, options } = context.Properties.getParameters(
        terms, {},
        context.currentUser
      );
      return context.Properties.find(selector, options).fetch();
    },
  },

  single: {
    name: 'propertiesSingle',
    resolver(root, { documentId }, context) {
      const document = context.Properties.findOne({ _id: documentId });
      return context.Users.restrictViewableFields(
        context.currentUser,
        context.Properties,
        document
      );
    },
  },

  total: {
    name: 'propertiesTotal',
    resolver(root, { terms = {} }, context) {
      const { selector, options } = context.Properties.getParameters(
        terms, {},
        context.currentUser
      );
      return context.Properties.find(selector, options).count();
    },
  }

};

export default resolvers;