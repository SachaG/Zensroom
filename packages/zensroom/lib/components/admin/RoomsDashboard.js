/*

Show a list of all rooms

http://docs.vulcanjs.org/core-components.html#Datatable

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection.js';

const RoomsDashboard = () =>

  <div className="rooms-dashboard">
    
    <h3><FormattedMessage id='rooms.rooms'/></h3>

    <Components.Datatable 
      collection={Rooms} 
      columns={['name', 'description']} 
    />
  
  </div>

registerComponent('RoomsDashboard', RoomsDashboard);

export default RoomsDashboard;