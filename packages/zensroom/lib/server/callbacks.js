import { addCallback } from 'meteor/vulcan:core';

function setBookingPaidAt (modifier, post, charge) {
  modifier.$set.paidAt = new Date();
  return modifier;
}
addCallback('bookings.charge.sync', setBookingPaidAt);