import VulcanEmail from 'meteor/vulcan:email';

import Rooms from './rooms/collection';

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
    getProperties(data) {
      const properties = {
        name: data.room.name,
        username: 'John Smith',
        profileUrl: 'http://foo.com/user/john-smith',
        roomUrl: 'http://foo.com/room/my-room'
      }
      return properties;
    },
    subject(properties) {
      return `A new room has been created: ${properties.name}`;
    },
    getTestObject() {
      const room = {name: 'My Fake Room'}
      return { room };
    }
  }

});
