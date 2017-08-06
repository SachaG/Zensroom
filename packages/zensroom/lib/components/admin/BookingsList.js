import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Bookings from '../../modules/bookings/collection.js';

const BookingStartAt = ({ document: booking }) => <div>{booking.startAt}</div>
const BookingEndAt = ({ document: booking }) => <div>{booking.endAt}</div>

const BookingsList = () =>

  <div className="bookings-list">
    
    <h3><FormattedMessage id='bookings.bookings'/></h3>

    <Components.Datatable 
      collection={Bookings} 
      columns={['startAt', 'endAt']} 
    />
  
  </div>

registerComponent('BookingsList', BookingsList);

export default BookingsList;