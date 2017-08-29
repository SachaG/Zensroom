import React from 'react';
import { Components, registerComponent, withList, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import { Link } from 'react-router';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';

import Bookings from '../../modules/bookings/collection.js';

const BookingsPending = ({currentUser}) => {
  return (
    <div>
      {currentUser.bookings.map((booking) => {
        if (booking.paidAt === null) {
          return (
            <div key={booking._id}>
              <Link to={`/booking/${booking._id}`}>Complete your booking.</Link>
            </div>
          )
        }
      })}
    </div>
  )
}

const options = {
  collection: Bookings,
  // fragmentName: 'BookingsItemFragment'
};

registerComponent(
  'BookingsPending',
  BookingsPending,
  [withList, options],
  withCurrentUser
);

export default withList(options)(BookingsPending);
