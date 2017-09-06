/*

Home

*/

import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import compose from 'recompose/compose';


// import RoomsList from '../rooms/RoomsList';
// import RoomsSearchForm from '../rooms/RoomsSearchForm';

const Home = ({currentUser}) =>

  <div>
    <Components.BookingsPending terms={{view: 'userPendingBookings', userId: currentUser._id}}/>
    <Components.RoomsSearchForm/>

    <div className="home-section">
      <h3 className="section-title"><FormattedMessage id="rooms.featured"/></h3>
      <Components.RoomsList terms={{limit: 3}}/>
    </div>

    <div className="home-section">
      <h3 className="section-title"><FormattedMessage id="rooms.with_fireplace"/></h3>
      <Components.RoomsList terms={{limit: 3, filters: ['fireplace']}}/>
    </div>

  </div>

registerComponent('Home', Home, withCurrentUser);

// export default compose(
//   withCurrentUser,
// )(Home);
