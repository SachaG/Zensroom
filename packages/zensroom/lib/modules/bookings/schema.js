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
    // resolveAs: 'user: User', // resolve this field as "user" on the client
  },

  roomId: {
    type: String,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    hidden: true
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

  paidAt: {
    type: Date,
    optional: true,
    viewableBy: ['members'],
  },

};

export default schema;