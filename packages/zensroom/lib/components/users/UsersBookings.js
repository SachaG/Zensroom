/*

User Bookings page

*/

import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const UsersBookings = (props) => {
  return (
    <div>
      <Components.RoomsSearchForm />
    </div>
  )
};


UsersBookings.propTypes = {
  terms: PropTypes.object, // a user is defined by its unique _id or its unique slug
};

UsersBookings.displayName = 'UsersBookings';

registerComponent('UsersBookings', UsersBookings, withCurrentUser, withRouter);
