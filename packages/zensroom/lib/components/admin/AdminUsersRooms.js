import React from 'react';
import { Link } from 'react-router';

const AdminUsersRooms = ({ document: user }) => 
  <ul>
    {user.rooms && user.rooms.map(room => 
      <li key={room._id}><Link to={`/room/${room._id}`}>{room.name}</Link></li>
    )}
  </ul>

export default AdminUsersRooms;