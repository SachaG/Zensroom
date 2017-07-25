import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'bookings.new',
  'bookings.edit.own',
  'bookings.remove.own',
]);

Users.groups.admins.can([
  'bookings.edit.all',
  'bookings.remove.all,'
]);