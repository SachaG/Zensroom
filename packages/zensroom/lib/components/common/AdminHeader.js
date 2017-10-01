/*

Admin Header

*/

import React from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { Link } from 'react-router';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const AdminHeader = ({ currentUser }, context) =>

  <div className="subheader">
    <div className="content-block">
      <Link className="subheader-link" to="/admin"><FormattedMessage id="nav.admin"/></Link>
      <Link className="subheader-link" to="/admin/bookings"><FormattedMessage id="nav.bookings"/></Link>
      <Link className="subheader-link" to="/admin/rooms"><FormattedMessage id="nav.rooms"/></Link>
      <Link className="subheader-link" to="/admin/reviews"><FormattedMessage id="nav.reviews"/></Link>
    </div>
  </div>

AdminHeader.displayName = 'AdminHeader';

AdminHeader.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent('AdminHeader', AdminHeader, withCurrentUser);

// export default withCurrentUser(AdminHeader);
