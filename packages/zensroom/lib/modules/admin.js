import { extendFragment, addAdminColumn } from 'meteor/vulcan:core';
import AdminUsersRooms from '../components/admin/AdminUsersRooms';
import AdminUsersBookings from '../components/admin/AdminUsersBookings';
import AdminUsersReviews from '../components/admin/AdminUsersReviews';

extendFragment('UsersAdmin', `
  rooms(limit: 5){
    ...RoomsDefaultFragment
  }
  bookings(limit: 5){
    ...BookingsDefaultFragment
  }
  reviews(limit: 5){
    ...ReviewsDefaultFragment
  }
`);

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