/*

Check if a user can perform the "new" mutation

http://docs.vulcanjs.org/mutations.html#New-Mutation

*/

import moment from 'moment';
import Users from 'meteor/vulcan:users';

export const newCheck = (user, document) => {
  // if user is not logged in, disallow operation
  if (!user) return false;

  /* 

  else, check if:

  - they can perform the "reviews.new" operation
  - they have booked the associated room in the past
  - they haven't already left a review
  
  */

  const hasBookedRoom = _.some(user.bookings, booking => booking.roomId === document.roomId && moment().isBefore(moment(booking.endAt)));
  const hasLeftAReview = _.some(user.reviews, review => review.roomId === document.roomId);
  
  // console.log(user)
  // console.log(document)
  // console.log(hasBookedRoom)
  // console.log(hasLeftAReview)
  
  return Users.canDo(user, `reviews.new`) && hasBookedRoom && !hasLeftAReview;
}