import React from 'react';
import { Components, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';

import Rooms from '../../modules/rooms/collection';

const RoomsPage = ({document, loading, currentUser}) => 
  
  <div>

    {loading? 'Loading…' : <Components.Card collection={Rooms} document={document} currentUser={currentUser} />}
  
  </div>

RoomsPage.displayName = 'RoomsPage';

const options = {
  collection: Rooms
};

const mapPropsFunction = props => ({...props, documentId: props.routeParams && props.routeParams.roomId});

export default compose(
  mapProps(mapPropsFunction),
  withDocument(options),
  withCurrentUser
)(RoomsPage);
