/*

Fragments on the Bookings collection

http://docs.vulcanjs.org/fragments.html

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment BookingsItemFragment on Booking {
    __typename
    _id
    createdAt
    userId
    user {
      _id
      displayName
    }
    roomId
    room {
      pricePerNight
      name
    }
    startAt
    endAt
    numberOfGuests
    paidAt    
  }  
`);