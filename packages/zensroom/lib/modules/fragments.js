import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment BookingsItemFragment on Booking {
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