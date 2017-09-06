/*

Single booking page, wrapped with withDocument

http://docs.vulcanjs.org/data-loading.html#Single-Resolver

*/

import React from 'react';
import { Components, registerComponent, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import Button from 'react-bootstrap/lib/Button';
import gql from 'graphql-tag';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Bookings from '../../modules/bookings/collection';

const BookingsCompleted = ({document, loading, currentUser}) => 
  
  <div>
    {loading? 'Loading…' :

      <div>

        <h2 className="page-title">Booking for {document.room.name} completed</h2>

        <Components.Card fields={['startAt', 'endAt', 'paidAt']} collection={Bookings} document={document} currentUser={currentUser} />
    
      </div>
    
    }
  
  </div>

BookingsCompleted.displayName = 'BookingsPage';

const options = {
  collection: Bookings,
  fragmentName: 'BookingsItemFragment'
};

const mapPropsFunction = props => ({...props, documentId: props.routeParams && props.routeParams.bookingId});

registerComponent('BookingsCompleted', BookingsCompleted, mapProps(mapPropsFunction), [withDocument, options], withCurrentUser);

// export default compose(
//   mapProps(mapPropsFunction),
//   withDocument(options),
//   withCurrentUser
// )(BookingsCompleted);
