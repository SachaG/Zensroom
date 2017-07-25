import { addGraphQLResolvers } from 'meteor/vulcan:core';

const resolvers = {
  list: {
    name: 'bookingsList',
    resolver(root, { terms = {} }, context, info) {
      let { selector, options } = context.Bookings.getParameters(
        terms, {},
        context.currentUser
      );
      return context.Bookings.find(selector, options).fetch();
    },
  },

  single: {
    name: 'bookingsSingle',
    resolver(root, { documentId }, context) {
      const document = context.Bookings.findOne({ _id: documentId });
      return context.Users.restrictViewableFields(
        context.currentUser,
        context.Bookings,
        document
      );
    },
  },

  total: {
    name: 'bookingsTotal',
    resolver(root, { terms = {} }, context) {
      const { selector, options } = context.Bookings.getParameters(
        terms, {},
        context.currentUser
      );
      return context.Bookings.find(selector, options).count();
    },
  }

};

export default resolvers;