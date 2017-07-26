import React from 'react';
import { Components, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import Button from 'react-bootstrap/lib/Button';

import Rooms from '../../modules/rooms/collection';
import BookingsNewForm from '../bookings/BookingsNewForm';

const RoomsPage = ({document, loading, currentUser}) => 
  
  <div>

    <Components.ModalTrigger label="Book" component={<Button bsStyle="primary">Book this room</Button>}>
      <BookingsNewForm room={document}/>
    </Components.ModalTrigger>

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
