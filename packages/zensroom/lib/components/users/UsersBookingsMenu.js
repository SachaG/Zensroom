/*

User menu (when not logged in)

*/

import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import { Link } from 'react-router';

const UsersBookingsMenu = ({state}) =>
  <Dropdown id="bookings-dropdown" className="users-bookings-menu" pullRight>
    <Dropdown.Toggle>
      Bookings
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <div>
        <Link to="/account/bookings/past"><FormattedMessage id="bookings.past" /></Link>
      </div>
      <div>
        <Link className="nav-item" to="/account/bookings/current"><FormattedMessage id="bookings.current" /></Link>
      </div>
      <div>
        <Link className="nav-item" to="/account/bookings/future"><FormattedMessage id="bookings.future" /></Link>
      </div>
    </Dropdown.Menu>
  </Dropdown>;

UsersBookingsMenu.displayName = "UsersBookingsMenu";

registerComponent('UsersBookingsMenu', UsersBookingsMenu);

// export default UsersBookingsMenu;
