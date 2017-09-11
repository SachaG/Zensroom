import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import compose from 'recompose/compose';

import Bookings from '../../modules/bookings/collection.js';

const BookingsPast = ({currentUser}) =>
    <div>
      <Components.Datatable
        collection={Bookings}
        columns={[
          'endAt',
          'amount',
          'status'
        ]}
        options={{
          fragmentName: 'BookingsItemFragment',
          terms: {view: 'userBookingsPast'}
        }}
      />
    </div>;


registerComponent('BookingsPast', BookingsPast, withCurrentUser);

export default compose(
  withCurrentUser,
)(BookingsPast);
