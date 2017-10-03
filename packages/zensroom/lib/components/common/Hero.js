/*

Hero

*/
import React from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const Hero = () =>

  <div className="hero">

    <h2 className="hero-tagline">Find Serviced Apartments and Homes in Japan</h2>

  </div>


registerComponent('Hero', Hero);

// export default withCurrentUser(Header);
