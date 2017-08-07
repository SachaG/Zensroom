/*

Bookings permissions

http://docs.vulcanjs.org/groups-permissions.html#Assigning-Actions

*/

import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'bookings.new',
  'bookings.edit.own',
  'bookings.remove.own',
]);