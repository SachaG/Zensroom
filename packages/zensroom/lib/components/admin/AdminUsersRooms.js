/*

Show a user's rooms in the admin users dashboard

http://docs.vulcanjs.org/admin.html

*/

import React from 'react';
import { Link } from 'react-router';
import { registerComponent } from 'meteor/vulcan:core';

const AdminUsersRooms = ({ document: user }) => 
  <ul>
    {user.rooms && user.rooms.map(room => 
      <li key={room._id}><Link to={`/room/${room._id}`}>{room.name}</Link></li>
    )}
  </ul>

registerComponent('AdminUsersRooms', AdminUsersRooms);

export default AdminUsersRooms;