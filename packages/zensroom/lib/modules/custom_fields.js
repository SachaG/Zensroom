import Users from 'meteor/vulcan:users';

Users.addField([
  {
    fieldName: 'rooms',
    fieldSchema: {
      type: Array,
      optional: true,
      viewableBy: ['guests'],
      resolveAs: {
        fieldName: 'rooms',
        arguments: 'limit: Int = 5',
        type: '[Room]',
        resolver: (user, { limit }, { currentUser, Users, Rooms }) => {
          const rooms = Rooms.find({ userId: user._id }, { limit }).fetch();

          // restrict documents fields
          // const viewableRooms = _.filter(rooms, room => Rooms.checkAccess(currentUser, room));
          const restrictedRooms = Users.restrictViewableFields(currentUser, Rooms, rooms);
        
          return restrictedRooms;
        }
      }
    }
  },
  {
    fieldName: 'bookings',
    fieldSchema: {
      type: Array,
      optional: true,
      viewableBy: ['guests'],
      resolveAs: {
        fieldName: 'bookings',
        arguments: 'limit: Int = 5',
        type: '[Booking]',
        resolver: (user, { limit }, { currentUser, Users, Bookings }) => {
          const bookings = Bookings.find({ userId: user._id }, { limit }).fetch();

          // restrict documents fields
          // const viewableRooms = _.filter(rooms, room => Rooms.checkAccess(currentUser, room));
          const restrictedBookings = Users.restrictViewableFields(currentUser, Bookings, bookings);
        
          return restrictedBookings;
        }
      }
    }
  },
  {
    fieldName: 'reviews',
    fieldSchema: {
      type: Array,
      optional: true,
      viewableBy: ['guests'],
      resolveAs: {
        fieldName: 'reviews',
        arguments: 'limit: Int = 5',
        type: '[Review]',
        resolver: (user, { limit }, { currentUser, Users, Reviews }) => {
          const reviews = Reviews.find({ userId: user._id }, { limit }).fetch();

          // restrict documents fields
          // const viewableRooms = _.filter(rooms, room => Rooms.checkAccess(currentUser, room));
          const restrictedReviews = Users.restrictViewableFields(currentUser, Reviews, reviews);
        
          return restrictedReviews;
        }
      }
    }
  },
]);