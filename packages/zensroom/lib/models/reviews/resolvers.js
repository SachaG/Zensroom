import { addGraphQLResolvers } from 'meteor/vulcan:core';

const resolvers = {
  list: {
    name: 'reviewsList',
    resolver(root, { terms = {} }, context, info) {
      let { selector, options } = context.Reviews.getParameters(
        terms, {},
        context.currentUser
      );
      return context.Reviews.find(selector, options).fetch();
    },
  },

  single: {
    name: 'reviewsSingle',
    resolver(root, { documentId }, context) {
      const document = context.Reviews.findOne({ _id: documentId });
      return context.Users.restrictViewableFields(
        context.currentUser,
        context.Reviews,
        document
      );
    },
  },

  total: {
    name: 'reviewsTotal',
    resolver(root, { terms = {} }, context) {
      const { selector, options } = context.Reviews.getParameters(
        terms, {},
        context.currentUser
      );
      return context.Reviews.find(selector, options).count();
    },
  }

};

export default resolvers;