/*

Accounts Header

*/

import React from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, withCurrentUser, getSetting } from 'meteor/vulcan:core';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const AccountHeader = ({ currentUser }, context) =>

  <div className="account-header">
    <Link className="account-header-link" to="/account"><FormattedMessage id="nav.account"/></Link>
    <Link className="account-header-link" to="/account/bookings"><FormattedMessage id="nav.bookings"/></Link>
  </div>;

AccountHeader.displayName = 'AccountHeader';

AccountHeader.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent('AccountHeader', AccountHeader, withCurrentUser);

// export default withCurrentUser(AccountHeader);
