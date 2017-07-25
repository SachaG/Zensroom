import {
  newMutation,
  editMutation,
  removeMutation,
  Utils
} from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {
  // new: {
  //   name: 'bookingsnew',
  //   check(user) {
  //     if (!user) return false;
  //     return Users.canDo(user, 'bookingsnew');
  //   },
  //   mutation(root, {document}, context) {
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return newMutation({
  //       collection: context.Bookings,
  //       document: document,
  //       currentUser: context.currentUser,
  //       validate: true,
  //       context,
  //     });
  //   },
  // },
  //
  // edit: {
  //   name: 'bookingsedit',
  //   check(user, document) {
  //     if (!user || !document) return false;
  //     return Users.owns(user, document) ?
  //       Users.canDo(user, 'bookingsedit,own') :
  //       Users.canDo(user, `bookingsedit,all`);
  //   },
  //   mutation(root, {documentId, set, unset}, context) {
  //     const document = context.Bookings.findOne(documentId);
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return editMutation({
  //       collection: context.Bookings,
  //       documentId: documentId,
  //       set: set,
  //       unset: unset,
  //       currentUser: context.currentUser,
  //       validate: true,
  //       context,
  //     });
  //   },
  // },
  //
  // remove: {
  //   name: 'bookingsremove',
  //   check(user, document) {
  //     if (!user || !document) return false;
  //     return Users.owns(user, document) ?
  //       Users.canDo(user, 'bookingsremove,own') :
  //       Users.canDo(user, `bookingsremove,all`);
  //   },
  //   mutation(root, {documentId}, context) {
  //     const document = context.Bookings.findOne(documentId);
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return removeMutation({
  //       collection: context.Bookings,
  //       documentId: documentId,
  //       currentUser: context.currentUser,
  //       validate: true,
  //       context,
  //     });
  //   },
  // },
};

export default mutations;