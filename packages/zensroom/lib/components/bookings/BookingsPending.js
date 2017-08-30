import React from 'react';
import { Components, registerComponent, withList, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import { Link } from 'react-router';
import compose from 'recompose/compose';

import Bookings from '../../modules/bookings/collection.js';

const BookingsPending = ({loading, results}) => {
  return (
    <div>
      {loading ? <Components.Loading/> :
        <div>
        {results.map((booking) => {
          if (booking.paidAt === null) {
            return (
              <div key={booking._id}>
                <Link to={`/booking/${booking._id}`}>Complete your booking.</Link>
              </div>
            )
          }
        })}
        </div>
      }
    </div>
  )
}

const options = {
  collection: Bookings
}

registerComponent('BookingsPending', BookingsPending, [withList, options]);

export default compose(
  withList(options),
)(BookingsPending);
