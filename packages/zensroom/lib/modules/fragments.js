import { registerFragment, extendFragment } from 'meteor/vulcan:core';

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