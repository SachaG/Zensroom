import React from 'react';
import { Components, registerComponent, withList, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import { Link } from 'react-router';
import { Alert } from 'react-bootstrap';
import compose from 'recompose/compose';

import Bookings from '../../modules/bookings/collection.js';

const BookingsPending = ({loading, results}) =>
  <div>
    {results && results.length ?
      <Alert bsStyle="danger">
        {results.map((booking) => (
          <div key={booking._id}>
            <Link to={`/booking/${booking._id}/`}>Complete your booking of {booking.room.name}.</Link>
          </div>
        ))}
      </Alert> :
      null
    }
  </div>;


const options = {
  collection: Bookings,
  fragmentName: 'BookingsItemFragment'
};

registerComponent('BookingsPending', BookingsPending, [withList, options]);

export default compose(
  withList(options),
)(BookingsPending);
