/*

Show a list of all rooms

http://docs.vulcanjs.org/core-components.html#Datatable

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection.js';

const RoomPhotos = ({ document }) =>
  <div>
    {document.photos.map((photo) => <img key={photo[0].url} src={`${photo[0].url}`} alt=""/>)}
  </div>;

const RoomsDashboard = () =>

  <div className="rooms-dashboard">

    <h3><FormattedMessage id='rooms.rooms'/></h3>

    <Components.Datatable
      collection={Rooms}
      columns={[
        'name',
        'description',
        {
          name: 'Photos',
          component: RoomPhotos
        }
      ]}
      showEdit={true}
    />

  </div>

registerComponent('RoomsDashboard', RoomsDashboard);

// export default RoomsDashboard;
