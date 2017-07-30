import React from 'react';
import { Components, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection';
import BookingsNewForm from '../bookings/BookingsNewForm';
import BookingsRoomUser from '../bookings/BookingsRoomUser';

import ReviewsList from '../reviews/ReviewsList';
import ReviewsNewForm from '../reviews/ReviewsNewForm';

const RoomsPage = ({document: room, documentId, loading, currentUser}) => 
  
  <div className="room-page">

    <div className="room-main">

      {loading? <Components.Loading/> : <Components.Card collection={Rooms} document={room} currentUser={currentUser} />}

    </div>

    <div className="room-sidebar">

      <Components.ModalTrigger label="Book" component={<Button className="room-book" bsStyle="primary">Book this room</Button>}>
        <BookingsNewForm room={room}/>
      </Components.ModalTrigger>

      {currentUser ? 
        <BookingsRoomUser terms={{view: 'userBookings', userId: currentUser._id, roomId: documentId}}/>
      : null}

      <hr/>

      <div className="room-reviews">

        <ReviewsList terms={{view: 'roomReviews', roomId: documentId}} />

        {currentUser ? 
          <div>
            <h4><FormattedMessage id="reviews.leave_review"/></h4>
            <ReviewsNewForm roomId={documentId}/>
          </div>
        : null}

      </div>

    </div>

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
