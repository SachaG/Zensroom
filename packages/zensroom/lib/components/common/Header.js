import React from 'react';
import PropTypes from 'prop-types';
import { Components, withCurrentUser } from 'meteor/vulcan:core';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';

import UsersMenu from '../users/UsersMenu';
import UsersAccountMenu from '../users/UsersAccountMenu';
import RoomsNewForm from '../rooms/RoomsNewForm';

const Header = ({ currentUser }, context) => 
  <header className="header">

    <div className="logo"><Link to="/">Zens</Link></div>

    <div className="nav">

      <Link className="nav-item" to="/how-to">How To Book</Link>
      <Link className="nav-item" to="/about">About Us</Link>

      <div className="nav-item nav-user">
        {currentUser ? <UsersMenu/> : <UsersAccountMenu/>}
      </div>

      <Components.ModalTrigger label="New Room" component={<Button bsStyle="primary">New Room</Button>}>
        <RoomsNewForm />
      </Components.ModalTrigger>

    </div>
  </header>

Header.displayName = "Header";

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default withCurrentUser(Header);
