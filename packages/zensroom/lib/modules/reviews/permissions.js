/*

Reviews permissions

http://docs.vulcanjs.org/groups-permissions.html#Assigning-Actions

*/

import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'reviews.new',
  'reviews.edit.own',
  'reviews.remove.own',
]);