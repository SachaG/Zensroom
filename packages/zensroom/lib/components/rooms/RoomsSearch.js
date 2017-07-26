import React from 'react';
import { Components } from 'meteor/vulcan:core';

import Rooms from '../../modules/rooms/collection';
import RoomsList from './RoomsList';

const RoomsSearch = () => 
  
  <div>
    <h3>search results:</h3>
    <RoomsList/>
  </div>


export default RoomsSearch;