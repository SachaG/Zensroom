/*

Layout

*/

import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';

// import Header from './Header';
// import FlashMessages from './FlashMessages';
// import Footer from './Footer';

const AdminLayout = ({currentUser, children, currentRoute}) =>

  <div className={classNames('wrapper', `wrapper-${currentRoute.name.replace('.', '-')}`)} id="wrapper">

    <Helmet>
      <link name="bootstrap" rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css"/>
      <link name="font-awesome" rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Helmet>

    <Components.Header />

    <Components.AdminHeader />
  
    <div className="content-wrapper">
      
      <div className="admin-main">

        <Components.FlashMessages />

        {React.cloneElement(children, { currentUser })}

      </div>
  
    </div>

    <Components.Footer />
  
  </div>

registerComponent('AdminLayout', AdminLayout, withCurrentUser);

// export default withCurrentUser(Layout);
