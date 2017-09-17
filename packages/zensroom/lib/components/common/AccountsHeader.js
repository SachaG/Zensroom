/*

Accounts Header

*/

import React from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, withCurrentUser, getSetting } from 'meteor/vulcan:core';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'meteor/vulcan:i18n';

// import UsersMenu from '../users/UsersMenu';
// import UsersAccountMenu from '../users/UsersAccountMenu';

const AccountsHeader = ({ currentUser }, context) =>
  <header className="header">

    <div className="brand">
      <div className="logo"><Link to="/"><h1>{getSetting('title')}</h1></Link></div>
      <div className="tagline">{getSetting('tagline')}</div>
    </div>

    <div className="nav">

      <Link className="nav-item" to="/how-to"><FormattedMessage id="nav.how_to"/></Link>
      <Link className="nav-item" to="/about"><FormattedMessage id="nav.about"/></Link>

      <div className="nav-item nav-user">
        { currentUser ? <Components.UsersBookingsMenu /> : <Components.UsersAccountMenu/> }
      </div>

    </div>
  </header>;

AccountsHeader.displayName = 'AccountsHeader';

AccountsHeader.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent('AccountsHeader', AccountsHeader, withCurrentUser);

// export default withCurrentUser(AccountsHeader);
