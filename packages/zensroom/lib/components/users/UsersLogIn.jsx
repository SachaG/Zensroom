/*

Users log in form

*/

import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import { STATES } from 'meteor/vulcan:accounts';
import { Link } from 'react-router';

const UsersLogIn = ({state}) =>

  <div className="page">
    <Components.AccountsLoginForm showSignUpLink={false}/>
    <p><FormattedMessage id="accounts.dont_have_an_account"/> <Link to="/sign-up"><FormattedMessage id="accounts.sign_up_here"/></Link></p>
  </div>

UsersLogIn.displayName = 'UsersLogIn';

registerComponent('UsersLogIn', UsersLogIn);

export default UsersLogIn;
