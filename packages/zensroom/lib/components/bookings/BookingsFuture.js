import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import compose from 'recompose/compose';
import { Link } from 'react-router';

import Bookings from '../../modules/bookings/collection.js';

const BookingsDate = ({ document }) =>
  <div>
    <Link to={document.pageUrl}>From {document.startAtFormattedShort} to {document.endAtFormattedShort}</Link>
  </div>

const BookingsFuture = ({ currentUser }) =>
  <div>
    <Components.Datatable
      collection={Bookings}
      columns={[
        {
          name: 'dates',
          component: BookingsDate
        },
        'amount',
        'status'
      ]}
      options={{
        fragmentName: 'BookingsItemFragment',
        terms: {view: 'userBookingsFuture'}
      }}
    />
  </div>;


registerComponent('BookingsFuture', BookingsFuture, withCurrentUser);

// export default compose(
//   withCurrentUser,
// )(BookingsFuture);
