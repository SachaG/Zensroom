import React from 'react';
import { Link } from 'react-router';
import { registerComponent } from 'meteor/vulcan:core';

const AdminUsersBookings = ({ document: user }) => 
  <ul>
    {user.bookings && user.bookings.map(booking => 
      <li key={booking._id}><Link to={`/booking/${booking._id}`}>{booking.startAt} - {booking.endAt}</Link></li>
    )}
  </ul>

registerComponent('AdminUsersBookings', AdminUsersBookings);

export default AdminUsersBookings;