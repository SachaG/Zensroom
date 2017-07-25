import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'reviews.new',
  'reviews.edit.own',
  'reviews.remove.own',
]);

Users.groups.admins.can([
  'reviews.edit.all',
  'reviews.remove.all,'
]);