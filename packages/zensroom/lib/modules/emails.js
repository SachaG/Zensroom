import VulcanEmail from 'meteor/vulcan:email';
import Users from 'meteor/vulcan:users';
import { runQuery } from 'meteor/vulcan:core';
import Rooms from './rooms/collection';
import { graphql } from 'graphql';

VulcanEmail.addEmails({

  test: {
    template: 'test',
    path: '/email/test',
    getProperties() {
      return {date: new Date()};
    },
    subject() {
      return 'This is a test';
    },
    getTestObject() {
      return {date: new Date()};
    }
  },

  roomsNew: {
    template: 'roomsNew',
    path: '/email/roomsNew',
    subject(data) {
      const room = _.isEmpty(data) ? {name: '[name]'} : data.RoomsSingle;
      return `A new room has been created: ${room.name}`;
    },
    query: `
      query OneRoom($documentId: String){
        RoomsSingle(documentId: $documentId){
          name
          description
          user{
            _id
            displayName
          }
        }
      }
    `,
    testVariables: {}
  }

});
