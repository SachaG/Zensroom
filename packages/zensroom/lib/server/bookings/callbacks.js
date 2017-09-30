/*

Server callbacks

See: http://docs.vulcanjs.org/callbacks.html

*/

import { addCallback } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import VulcanEmail from 'meteor/vulcan:email';

/*

When a booking is paid, mark it as paid

*/
function setBookingPaidAt (modifier, post, charge) {
  modifier.$set.paidAt = new Date();
  modifier.$set.status = 3; // mark as paid
  return modifier;
}
addCallback('bookings.charge.sync', setBookingPaidAt);

/*

When a booking is completed, send confirmation to user 

*/
async function sendBookingConfirmation (booking, oldBooking, currentUser) {

  if (booking.status !== oldBooking.status && booking.status === 3){
    const user = Users.findOne(booking.userId);
    await VulcanEmail.buildAndSend({
      to: user.email, 
      emailName: 'bookingsCompleted', 
      variables: { documentId: booking._id}
    });
  }

}
addCallback('bookings.edit.async', sendBookingConfirmation);
