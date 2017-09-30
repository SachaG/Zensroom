/*

User Bookings page

*/

import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const UsersBookings = () =>
  <div>

    <h3><FormattedMessage id="bookings.current" /></h3>
    <Components.BookingsCurrent />

    <h3><FormattedMessage id="bookings.future" /></h3>
    <Components.BookingsFuture />

    <h3><FormattedMessage id="bookings.past" /></h3>
    <Components.BookingsPast />
    
  </div>;

UsersBookings.propTypes = {
  terms: PropTypes.object, // a user is defined by its unique _id or its unique slug
};

UsersBookings.displayName = 'UsersBookings';

registerComponent('UsersBookings', UsersBookings, withCurrentUser, withRouter);
