/*

Reviews schema

http://docs.vulcanjs.org/schemas.html#Schemas

*/

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
  },

  roomId: {
    type: String,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    hidden: true,
  },

  comment: {
    label: 'Comment',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'textarea'
  },

};

export default schema;