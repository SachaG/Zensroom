import {
  newMutation,
  editMutation,
  removeMutation,
  Utils
} from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {
  // new: {
  //   name: 'reviewsnew',
  //   check(user) {
  //     if (!user) return false;
  //     return Users.canDo(user, 'reviewsnew');
  //   },
  //   mutation(root, {document}, context) {
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return newMutation({
  //       collection: context.Reviews,
  //       document: document,
  //       currentUser: context.currentUser,
  //       validate: true,
  //       context,
  //     });
  //   },
  // },
  //
  // edit: {
  //   name: 'reviewsedit',
  //   check(user, document) {
  //     if (!user || !document) return false;
  //     return Users.owns(user, document) ?
  //       Users.canDo(user, 'reviewsedit,own') :
  //       Users.canDo(user, `reviewsedit,all`);
  //   },
  //   mutation(root, {documentId, set, unset}, context) {
  //     const document = context.Reviews.findOne(documentId);
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return editMutation({
  //       collection: context.Reviews,
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
  //   name: 'reviewsremove',
  //   check(user, document) {
  //     if (!user || !document) return false;
  //     return Users.owns(user, document) ?
  //       Users.canDo(user, 'reviewsremove,own') :
  //       Users.canDo(user, `reviewsremove,all`);
  //   },
  //   mutation(root, {documentId}, context) {
  //     const document = context.Reviews.findOne(documentId);
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return removeMutation({
  //       collection: context.Reviews,
  //       documentId: documentId,
  //       currentUser: context.currentUser,
  //       validate: true,
  //       context,
  //     });
  //   },
  // },
};

export default mutations;