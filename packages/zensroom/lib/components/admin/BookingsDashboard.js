/*

Show a list of all bookings

http://docs.vulcanjs.org/core-components.html#Datatable

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Bookings from '../../modules/bookings/collection.js';

const BookingUser = ({ document }) => <div>{document.user.displayName}</div>;

const BookingsDashboard = () =>

  <div className="bookings-dashboard">
    
    <h3><FormattedMessage id='bookings.bookings'/></h3>

    <Components.Datatable 
      collection={Bookings}
      options={{
        fragmentName: 'BookingsItemFragment'
      }}
      columns={[
        'startAt', 
        'endAt',
        {
          name: 'user',
          component: BookingUser
        }
      ]} 
    />
  
  </div>

registerComponent('BookingsDashboard', BookingsDashboard);

export default BookingsDashboard;