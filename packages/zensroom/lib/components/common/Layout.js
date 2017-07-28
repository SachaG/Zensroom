import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import Header from './Header';
import FlashMessages from './FlashMessages';
import Footer from './Footer';

const Layout = ({currentUser, children, currentRoute}) =>

  <div className={classNames('wrapper', `wrapper-${currentRoute.name.replace('.', '-')}`)} id="wrapper">

    <Header />
  
    <div className="main">

      <FlashMessages />

      {React.cloneElement(children, { currentUser })}

    </div>
  
    <Footer />
  
  </div>

export default withCurrentUser(Layout);
