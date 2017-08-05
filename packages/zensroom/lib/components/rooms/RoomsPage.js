import React from 'react';
import { Components, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection';

import RoomsPhotos from './RoomsPhotos';
import RoomsMain from './RoomsMain';

import BookingsNewForm from '../bookings/BookingsNewForm';
import BookingsRoomUser from '../bookings/BookingsRoomUser';

const RoomsPage = ({document: room, documentId, loading, currentUser}) => 
  
  <div className="rooms-page">

    {loading? 

      <Components.Loading/> : 

      <div className="rooms-wrapper">

        <Components.ModalTrigger dialogClassName="rooms-photos-modal" component={<div className="rooms-hero-image"><img src={room.photos[0][2].secure_url}/></div>}>
          <RoomsPhotos room={room} />
        </Components.ModalTrigger>

        <div className="rooms-contents">

          <RoomsMain room={room} currentUser={currentUser}/>

          <div className="rooms-sidebar">

            <BookingsNewForm room={room}/>

            {/*currentUser ? 
              <BookingsRoomUser terms={{view: 'userBookings', userId: currentUser._id, roomId: documentId}}/>
            : null*/}

          </div>

        </div>

      </div>

    }

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
