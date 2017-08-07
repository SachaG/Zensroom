/*

Fragments on the Users collection

http://docs.vulcanjs.org/fragments.html

*/

import { extendFragment } from 'meteor/vulcan:core';

extendFragment('UsersAdmin', `
  rooms(limit: 5){
    ...RoomsDefaultFragment
  }
  bookings(limit: 5){
    ...BookingsDefaultFragment
  }
  reviews(limit: 5){
    ...ReviewsDefaultFragment
  }
`);

extendFragment('UsersCurrent', `
  rooms(limit: 5){
    ...RoomsDefaultFragment
  }
  bookings(limit: 5){
    ...BookingsDefaultFragment
  }
  reviews(limit: 5){
    ...ReviewsDefaultFragment
  }
`);