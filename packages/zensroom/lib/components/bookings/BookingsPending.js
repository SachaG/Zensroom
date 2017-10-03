import React from 'react';
import { Components, registerComponent, withList} from 'meteor/vulcan:core';
import { Link } from 'react-router';

import Bookings from '../../modules/bookings/collection.js';

const BookingsPending = ({loading, results}) => {
  return results && results.length ?
    <div className="bookings-pending">
      {results.map((booking) => (
        <div key={booking._id}>
          <Link to={`/booking/${booking._id}/`}>Complete your booking of {booking.room.name} →</Link>
        </div>
      ))}
    </div> :
    null
  }

const options = {
  collection: Bookings,
  fragmentName: 'BookingsItemFragment'
};

registerComponent('BookingsPending', BookingsPending, [withList, options]);

// export default compose(
//   withList(options),
// )(BookingsPending);
