import React from 'react';
import { Components } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import RoomsList from '../rooms/RoomsList';
import RoomsSearchForm from '../rooms/RoomsSearchForm';

const Home = () => 
  
  <div>

    <RoomsSearchForm/>

    <h2 className="page-title"><FormattedMessage id="rooms.featured"/></h2>
    <RoomsList/>
  </div>


export default Home;