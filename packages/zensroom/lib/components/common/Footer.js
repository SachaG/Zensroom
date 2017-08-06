import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const Footer = props => 
  <footer className="footer">
    footer
  </footer>


Footer.displayName = 'Footer';

registerComponent('Footer', Footer);

export default Footer;