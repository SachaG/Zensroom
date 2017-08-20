import { addCallback } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import VulcanEmail from 'meteor/vulcan:email';

async function RoomsNewNotifications (room) {

  const userIds = _.pluck(Users.adminUsers({fields: {_id:1}}), '_id');
  const email = VulcanEmail.emails.roomsNew;

  // remove post author ID from arrays
  adminIds = _.without(adminIds, post.userId);

  userIds.forEach(async userId => {

    const user = await Users.queryOne(userId);
    
    const userEmail = user.email;

    if (userEmail) {
      await VulcanEmail.buildAndSend({
        to: userEmail, 
        email, 
        variables: { documentId: room._id}
      });
    } else {
      console.log(`// Couldn't send notification: admin user ${user._id} doesn't have an email`); // eslint-disable-line
    }

  });
}

addCallback('rooms.new.async', RoomsNewNotifications);
