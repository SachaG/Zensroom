/*

User menu (when not logged in)

*/

import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Link } from 'react-router';

const UsersAccountMenu = ({state}) =>

  <div>
    <Link className="nav-item" to="/sign-up"><FormattedMessage id="nav.sign_up"/></Link>
    <Link className="nav-item" to="/log-in"><FormattedMessage id="nav.log_in"/></Link>
  </div>
  

UsersAccountMenu.displayName = "UsersAccountMenu";

registerComponent('UsersAccountMenu', UsersAccountMenu);

// export default UsersAccountMenu;
