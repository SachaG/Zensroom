import React from 'react';
import { Components } from 'meteor/vulcan:core';

import RoomsList from '../rooms/RoomsList';
import RoomsSearchForm from '../rooms/RoomsSearchForm';

const Home = () => 
  
  <div>

    Serviced apartments and homes for business travelers in Japan

    <RoomsSearchForm/>

    <h3>featured rooms:</h3>
    <RoomsList/>
  </div>


export default Home;