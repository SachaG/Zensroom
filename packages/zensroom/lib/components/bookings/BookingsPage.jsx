import React from 'react';
import { Components, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import Button from 'react-bootstrap/lib/Button';
import gql from 'graphql-tag';

import Bookings from '../../modules/bookings/collection';

const BookingsPage = ({document, loading, currentUser}) => 
  
  <div>

    {loading? 'Loading…' :

      <div>

        {document.paidAt?
          <p>Paid on {document.paidAt}</p> :
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
            button={<Button bsStyle="primary">Complete Payment</Button>}
          />
        }

        <Components.Card collection={Bookings} document={document} currentUser={currentUser} />
    
      </div>
    
    }
  
  </div>

BookingsPage.displayName = 'BookingsPage';

const options = {
  collection: Bookings
};

const mapPropsFunction = props => ({...props, documentId: props.routeParams && props.routeParams.bookingId});

export default compose(
  mapProps(mapPropsFunction),
  withDocument(options),
  withCurrentUser
)(BookingsPage);
