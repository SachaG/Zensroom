import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'rooms.new',
  'rooms.edit.own',
  'rooms.remove.own',
]);