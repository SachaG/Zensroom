/*

The Bookings schema

http://docs.vulcanjs.org/schemas.html#Schemas

*/

import moment from 'moment';
import { Utils } from 'meteor/vulcan:core';

const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    viewableBy: ['members'],
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['members'],
    onInsert: (document, currentUser) => {
      return new Date();
    }
  },
  userId: {
    type: String,
    optional: true,
    viewableBy: ['members'],
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
    viewableBy: ['members'],
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
    viewableBy: ['members'],
    insertableBy: ['members'],
    editableBy: ['admins'],
    control: 'datetime',
  },

  endAt: {
    label: 'Check Out Date',
    type: Date,
    viewableBy: ['members'],
    insertableBy: ['members'],
    editableBy: ['admins'],
    control: 'datetime',
  },

  numberOfGuests: {
    label: 'Number of Guests',
    type: String,
    viewableBy: ['members'],
    insertableBy: ['members'],
    editableBy: ['admins'],
  },

  paidAt: {
    type: Date,
    optional: true,
    viewableBy: ['members'],
  },

  status: {
    type: Number,
    optional: true,
    viewableBy: ['members'],
    insertableBy: ['admins'],
    editableBy: ['admins'],
    control: 'select',
    form: {
      options: () => {
        return [
          {
            value: 1,
            label: 'pending'
          },
          {
            value: 2,
            label: 'approved'
          },
          {
            value: 3,
            label: 'paid'
          },
          {
            value: 4,
            label: 'rejected'
          },
        ]
      },
    },
    onInsert: document => {
      return document.status || 1;
    },
  },

  // GraphQL-only fields

  pageUrl: {
    type: String,
    optional: true,
    resolveAs: {
      type: 'String',
      resolver: (booking, args, context) => {
        return `${Utils.getSiteUrl()}booking/${booking._id}`;
      },
    }  
  },

  startAtFormatted: {
    label: 'Check In Date',
    type: String,
    optional: true,
    resolveAs: {
      type: 'String',
      resolver: (booking, args, context) => {
        return moment(booking.startAt).format('dddd, MMMM Do YYYY');
      }
    }  
  },

  endAtFormatted: {
    label: 'Check Out Date',
    type: String,
    optional: true,
    resolveAs: {
      type: 'String',
      resolver: (booking, args, context) => {
        return moment(booking.endAt).format('dddd, MMMM Do YYYY');
      }
    }  
  },

};

export default schema;