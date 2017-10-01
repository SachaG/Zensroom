/*

Accounts Header

*/

import React from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { Link } from 'react-router';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const AccountHeader = ({ currentUser }, context) =>

  <div className="subheader">
    <div className="content-block">
      <Link className="subheader-link" to="/account"><FormattedMessage id="nav.account"/></Link>
      <Link className="subheader-link" to="/account/bookings"><FormattedMessage id="nav.bookings"/></Link>
    </div>
  </div>

AccountHeader.displayName = 'AccountHeader';

AccountHeader.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent('AccountHeader', AccountHeader, withCurrentUser);

// export default withCurrentUser(AccountHeader);
