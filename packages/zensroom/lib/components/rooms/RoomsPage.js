import React from 'react';
import { Components, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import Button from 'react-bootstrap/lib/Button';

import Rooms from '../../modules/rooms/collection';
import BookingsNewForm from '../bookings/BookingsNewForm';
import BookingsRoomUser from '../bookings/BookingsRoomUser';

const RoomsPage = ({document, documentId, loading, currentUser}) => 
  
  <div>

    <BookingsRoomUser terms={{view: 'userBookings', userId: currentUser._id, roomId: documentId}}/>

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
