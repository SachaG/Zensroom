import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection.js';

const RoomName = ({ document: room }) => <div>{room.name}</div>
const RoomDescription = ({ document: room }) => <div>{room.description}</div>

const RoomsList = () =>

  <div className="rooms-list">
    
    <h3><FormattedMessage id='rooms.rooms'/></h3>

    <Components.Datatable 
      collection={Rooms} 
      columns={['name', 'description']} 
    />
  
  </div>

registerComponent('RoomsList', RoomsList);

export default RoomsList;