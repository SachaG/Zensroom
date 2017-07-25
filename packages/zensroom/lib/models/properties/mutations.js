import {
  newMutation,
  editMutation,
  removeMutation,
  Utils
} from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {
  // new: {
  //   name: 'propertiesnew',
  //   check(user) {
  //     if (!user) return false;
  //     return Users.canDo(user, 'propertiesnew');
  //   },
  //   mutation(root, {document}, context) {
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return newMutation({
  //       collection: context.Properties,
  //       document: document,
  //       currentUser: context.currentUser,
  //       validate: true,
  //       context,
  //     });
  //   },
  // },
  //
  // edit: {
  //   name: 'propertiesedit',
  //   check(user, document) {
  //     if (!user || !document) return false;
  //     return Users.owns(user, document) ?
  //       Users.canDo(user, 'propertiesedit,own') :
  //       Users.canDo(user, `propertiesedit,all`);
  //   },
  //   mutation(root, {documentId, set, unset}, context) {
  //     const document = context.Properties.findOne(documentId);
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return editMutation({
  //       collection: context.Properties,
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
  //   name: 'propertiesremove',
  //   check(user, document) {
  //     if (!user || !document) return false;
  //     return Users.owns(user, document) ?
  //       Users.canDo(user, 'propertiesremove,own') :
  //       Users.canDo(user, `propertiesremove,all`);
  //   },
  //   mutation(root, {documentId}, context) {
  //     const document = context.Properties.findOne(documentId);
  //     Utils.performCheck(this.check, context.currentUser, document);
  //     return removeMutation({
  //       collection: context.Properties,
  //       documentId: documentId,
  //       currentUser: context.currentUser,
  //       validate: true,
  //       context,
  //     });
  //   },
  // },
};

export default mutations;