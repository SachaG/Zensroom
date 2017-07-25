import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'properties.new',
  'properties.edit.own',
  'properties.remove.own',
]);

Users.groups.admins.can([
  'properties.edit.all',
  'properties.remove.all,'
]);