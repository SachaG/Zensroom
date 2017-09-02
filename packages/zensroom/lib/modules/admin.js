/*

Extend the users admin dashboard

http://docs.vulcanjs.org/admin.html

*/

import { extendFragment, addAdminColumn } from 'meteor/vulcan:core';
import AdminUsersRooms from '../components/admin/AdminUsersRooms';
import AdminUsersBookings from '../components/admin/AdminUsersBookings';
import AdminUsersReviews from '../components/admin/AdminUsersReviews';

addAdminColumn({
  name: 'rooms',
  order: 50,
  component: AdminUsersRooms
});

addAdminColumn({
  name: 'bookings',
  order: 60,
  component: AdminUsersBookings
});

addAdminColumn({
  name: 'reviews',
  order: 70,
  component: AdminUsersReviews
});

