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

const BookingsPage = ({document, loading, currentUser}) => 
  
  <div>
    {loading? 'Loading…' :

      <div>

        <h2 className="page-title">{document.room.name}</h2>

        <div className="bookings-checkout">
          {document.paidAt?
            <p><FormattedMessage id="bookings.paid_on"/> {document.paidAt}</p> :
            <Components.Checkout
              productKey="booking"
              associatedCollection={Bookings}
              associatedDocument={document}
              fragment={gql`
                fragment BookingSetAsPaid on Booking {
                  _id
                  paidAt
                }
              `}
              button={<Button bsStyle="primary"><FormattedMessage id="bookings.complete_payment"/></Button>}
            />
          }
        </div>

        <Components.Card fields={['startAt', 'endAt', 'paidAt']} collection={Bookings} document={document} currentUser={currentUser} />
    
      </div>
    
    }
  
  </div>

BookingsPage.displayName = 'BookingsPage';

const options = {
  collection: Bookings,
  fragmentName: 'BookingsItemFragment'
};

registerComponent('BookingsPage', BookingsPage, mapProps(mapPropsFunction), [withDocument, options], withCurrentUser);

const mapPropsFunction = props => ({...props, documentId: props.routeParams && props.routeParams.bookingId});

export default compose(
  mapProps(mapPropsFunction),
  withDocument(options),
  withCurrentUser
)(BookingsPage);
