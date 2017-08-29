/*

Server callbacks

See: http://docs.vulcanjs.org/callbacks.html

*/

import { addCallback } from 'meteor/vulcan:core';

/*

When a booking is paid, mark it as paid

*/
function setBookingPaidAt (modifier, post, charge) {
  modifier.$set.paidAt = new Date();
  modifier.$set.status = 3; // mark as paid
  return modifier;
}
addCallback('bookings.charge.sync', setBookingPaidAt);
