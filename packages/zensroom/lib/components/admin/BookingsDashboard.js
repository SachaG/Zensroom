/*

Show a list of all bookings

http://docs.vulcanjs.org/core-components.html#Datatable

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Bookings from '../../modules/bookings/collection.js';

const BookingsDashboard = () =>

  <div className="bookings-dashboard">
    
    <h3><FormattedMessage id='bookings.bookings'/></h3>

    <Components.Datatable 
      collection={Bookings} 
      columns={['startAt', 'endAt']} 
    />
  
  </div>

registerComponent('BookingsDashboard', BookingsDashboard);

export default BookingsDashboard;