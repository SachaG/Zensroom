/*

User menu (when logged in)

*/

import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Meteor } from 'meteor/meteor';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';
import { withApollo } from 'react-apollo';

const UsersMenu = ({currentUser, client}) =>
  <div className="users-menu">
    <Dropdown id="user-dropdown" pullRight>
      <Dropdown.Toggle>
        <Components.Avatar size="small" user={currentUser} link={false} />
        <div className="users-menu-name">{Users.getDisplayName(currentUser)}</div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <LinkContainer to={`/users/${currentUser.slug}`}>
          <MenuItem className="dropdown-item" eventKey="1"><FormattedMessage id="users.profile"/></MenuItem>
        </LinkContainer>
        <LinkContainer to={`/account`}>
          <MenuItem className="dropdown-item" eventKey="2"><FormattedMessage id="users.edit_account"/></MenuItem>
        </LinkContainer>
        <LinkContainer to={`/account/bookings/past`}>
          <MenuItem className="dropdown-item" eventKey="1"><FormattedMessage id="bookings.past"/></MenuItem>
        </LinkContainer>
        <LinkContainer to={`/account/bookings/future`}>
          <MenuItem className="dropdown-item" eventKey="1"><FormattedMessage id="bookings.future"/></MenuItem>
        </LinkContainer>

        {Users.canDo(currentUser, 'rooms.new') ?
          <LinkContainer to={`/room/new`}>
            <MenuItem className="dropdown-item" eventKey="2"><FormattedMessage id="rooms.create_new"/></MenuItem>
          </LinkContainer>
        : null}

        {Users.canDo(currentUser, 'users.view.all') ?
          <LinkContainer to={`/admin/`}>
            <MenuItem className="dropdown-item" eventKey="2"><FormattedMessage id="users.users_admin"/></MenuItem>
          </LinkContainer>
        : null}

        {Users.canDo(currentUser, 'bookings.view.all') ?
          <LinkContainer to={`/admin/bookings`}>
            <MenuItem className="dropdown-item" eventKey="2"><FormattedMessage id="bookings.bookings_admin"/></MenuItem>
          </LinkContainer>
        : null}

        {Users.canDo(currentUser, 'rooms.view.all') ?
          <LinkContainer to={`/admin/rooms`}>
            <MenuItem className="dropdown-item" eventKey="2"><FormattedMessage id="rooms.rooms_admin"/></MenuItem>
          </LinkContainer>
        : null}

        {Users.canDo(currentUser, 'reviews.view.all') ?
          <LinkContainer to={`/admin/reviews`}>
            <MenuItem className="dropdown-item" eventKey="2"><FormattedMessage id="reviews.reviews_admin"/></MenuItem>
          </LinkContainer>
        : null}

        <MenuItem className="dropdown-item" eventKey="4" onClick={() => Meteor.logout(() => client.resetStore())}><FormattedMessage id="users.log_out"/></MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  </div>


UsersMenu.propsTypes = {
  currentUser: PropTypes.object,
  client: PropTypes.object,
};

registerComponent('UsersMenu', UsersMenu, withApollo, withCurrentUser);

export default withCurrentUser(withApollo(UsersMenu));
