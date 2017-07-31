import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router';

const RoomsItem = ({room, currentUser}) =>

  <div className="card room-item">

    {room.photos && room.photos.length ? <Link to={`/room/${room._id}`}><img className="room-item-image" src={room.photos[0][0].secure_url}/></Link> : null}
    <Link to={`/room/${room._id}`}>{room.name}</Link>

  </div>

export default RoomsItem;