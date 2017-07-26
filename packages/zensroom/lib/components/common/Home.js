import React from 'react';
import { Components } from 'meteor/vulcan:core';

import Rooms from '../../modules/rooms/collection';
import RoomsList from '../rooms/RoomsList';

const Home = () => 
  
  <div>

    Serviced apartments and homes for business travelers in Japan

    <h3>featured rooms:</h3>
    <RoomsList/>
  </div>


export default Home;