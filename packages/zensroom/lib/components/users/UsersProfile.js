/*

User profile page

*/

import { Components, registerComponent, withDocument, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
import { Link } from 'react-router';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';

const UsersProfile = (props) => {
  if (props.loading) {

    return <div className="page users-profile"><Components.Loading/></div>

  } else if (!props.document) {

    console.log(`// missing user (_id/slug: ${props.documentId || props.slug})`);
    return <div className="page users-profile"><FormattedMessage id="app.404"/></div> 
  
  } else {

    const user = props.document;

    const terms = {view: "userPosts", userId: user._id};

    return (
      <div className="page users-profile">
        <Components.HeadTags url={Users.getProfileUrl(user, true)} title={Users.getDisplayName(user)} />
        <h2 className="page-title">{Users.getDisplayName(user)}</h2>
        <ul>
          <Components.ShowIf check={Users.options.mutations.edit.check} document={user}>
            <li><Link to={Users.getEditUrl(user)}><FormattedMessage id="users.edit_account"/></Link></li>
          </Components.ShowIf>
        </ul>
      </div>
    )
  }
}

UsersProfile.propTypes = {
  // document: PropTypes.object.isRequired,
}

UsersProfile.displayName = "UsersProfile";

const options = {
  collection: Users,
  queryName: 'usersSingleQuery',
  // fragmentName: 'UsersProfile',
};

const mapPropsFunction = props => ({...props, userId: props.routeParams && props.routeParams.userId, slug: props.routeParams && props.routeParams.slug});

registerComponent('UsersProfile', UsersProfile, mapProps(mapPropsFunction), withCurrentUser, [withDocument, options]);

export default compose(
  mapProps(mapPropsFunction),
  withCurrentUser,
  withDocument(options),
)(UsersProfile);