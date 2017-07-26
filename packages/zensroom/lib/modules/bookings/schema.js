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

  checkInAt: {
    label: 'Check In Date',
    type: Date,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'datetime',
  },

  checkOutAt: {
    label: 'Check Out Date',
    type: Date,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'datetime',
  },

  paidAt: {
    type: Date,
    optional: true,
    viewableBy: ['members'],
  },

};

export default schema;