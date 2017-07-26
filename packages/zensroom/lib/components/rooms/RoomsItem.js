import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router';

const RoomsItem = ({room, currentUser}) =>

  <div>

    <Link to={`/room/${room._id}`}>{room.name}</Link>

  </div>

export default RoomsItem;