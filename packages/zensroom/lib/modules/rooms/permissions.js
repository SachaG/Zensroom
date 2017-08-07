/*

Rooms permissions

http://docs.vulcanjs.org/groups-permissions.html#Assigning-Actions

*/

import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'rooms.new',
  'rooms.edit.own',
  'rooms.remove.own',
]);