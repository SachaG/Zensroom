import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import RoomsList from '../rooms/RoomsList';
import RoomsSearchForm from '../rooms/RoomsSearchForm';

const Home = () => 
  
  <div>

    <RoomsSearchForm/>

    <div className="home-section">
      <h3 className="section-title"><FormattedMessage id="rooms.featured"/></h3>
      <RoomsList terms={{limit: 3}}/>
    </div>

    <div className="home-section">
      <h3 className="section-title"><FormattedMessage id="rooms.with_fireplace"/></h3>
      <RoomsList terms={{limit: 3, filters: ['fireplace']}}/>
    </div>

  </div>

registerComponent('Home', Home);

export default Home;