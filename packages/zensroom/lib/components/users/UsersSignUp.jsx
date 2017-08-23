/*

Users sign up form

*/

import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { STATES } from 'meteor/vulcan:accounts';
import { Link } from 'react-router';

const UsersSignUp = ({state}) =>

  <div className="page">
    <Components.AccountsLoginForm formState={STATES.SIGN_UP} showSignInLink={false}/>
    <p><FormattedMessage id="accounts.already_have_an_account"/> <Link to="/log-in"><FormattedMessage id="accounts.log_in_here"/></Link></p>
  </div>

UsersSignUp.displayName = 'UsersSignUp';

registerComponent('UsersSignUp', UsersSignUp);

export default UsersSignUp;
