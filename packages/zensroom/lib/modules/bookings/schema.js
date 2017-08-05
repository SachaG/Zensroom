import moment from 'moment';

const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: (document, currentUser) => {
      return new Date();
    }
  },
  userId: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: {
      fieldName: 'user',
      type: 'User', 
      resolver: async (booking, args, { Users, currentUser }) => {
        const user = await Users.loader.load(booking.userId);
        return Users.restrictViewableFields(currentUser, Users, user);
      },
      addOriginalField: true
    }
  },

  roomId: {
    type: String,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    hidden: true,
    resolveAs: {
      fieldName: 'room',
      type: 'Room',
      resolver: async (booking, args, { Rooms, Users, currentUser }) => {
        const room = await Rooms.loader.load(booking.roomId);
        return Users.restrictViewableFields(currentUser, Rooms, room);
      },
      addOriginalField: true
    },
  },

  startAt: {
    label: 'Check In Date',
    type: Date,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['admins'],
    control: 'datetime',
  },

  endAt: {
    label: 'Check Out Date',
    type: Date,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['admins'],
    control: 'datetime',
  },

  numberOfGuests: {
    label: 'Number of Guests',
    type: String,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['admins'],
  },

  paidAt: {
    type: Date,
    optional: true,
    viewableBy: ['members'],
  },

};

export default schema;