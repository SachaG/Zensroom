import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

import Rooms from '../../modules/rooms/collection';
// import RoomsEditForm from './RoomsEditForm';

const RoomsItem = ({room, currentUser}) =>

  <div>

    <Components.Card collection={Rooms} document={room} currentUser={currentUser}/>

  </div>

export default RoomsItem;