import { addCallback } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import VulcanEmail from 'meteor/vulcan:email';

function RoomsNewNotifications (room) {

  console.log('// RoomsNewNotifications')

  const userIds = _.pluck(Users.adminUsers({fields: {_id:1}}), '_id');
  const email = VulcanEmail.emails.roomsNew;

  const data = {
    room: {
      name: room.name,
    }
  };

  // remove post author ID from arrays
  // adminIds = _.without(adminIds, post.userId);

  userIds.forEach(userId => {

    const userEmail = Users.getEmail(Users.findOne(userId));

    if (userEmail) {
      VulcanEmail.buildAndSend(userEmail, email, data);
    } else {
      console.log(`// Couldn't send notification: admin user ${user._id} doesn't have an email`); // eslint-disable-line
    }

  });
}

addCallback('rooms.new.async', RoomsNewNotifications);
