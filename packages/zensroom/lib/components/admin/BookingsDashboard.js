/*

Show a list of all bookings

http://docs.vulcanjs.org/core-components.html#Datatable

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Link } from 'react-router';

import Bookings from '../../modules/bookings/collection.js';

const BookingPrice = ({ document }) => <div>{document.room.pricePerNight}</div>;

const BookingUser = ({ document }) =>
  <div className="bookings-dashboard-user">
    <Components.Avatar size="small" user={document.user} link />
    <Link to={document.user.pageUrl}>
      {document.user.displayName}
    </Link>
  </div>;


const BookingRoom = ({ document }) =>
  <div className="bookings-dashboard-room">
    <Link to={document.room.pageUrl}>
      <img src={document.room.photos[0][1].url} alt=""/>
      <span>{document.room.name}</span>
    </Link>
  </div>;

const BookingsDashboard = () =>

  <div className="bookings-dashboard">

    <h3><FormattedMessage id='bookings.bookings'/></h3>

    <Components.Datatable
      collection={Bookings}
      options={{
        fragmentName: 'BookingsItemFragment'
      }}
      columns={[
        'startAtFormattedShort',
        'endAtFormattedShort',
        'numberOfGuests',
        'amount',
        'paidAtFormattedShort',
        'status',
        {
          name: 'user',
          component: BookingUser
        },
        {
          name: 'Room',
          component: BookingRoom
        }
      ]}
      showEdit={true}
    />

  </div>

registerComponent('BookingsDashboard', BookingsDashboard);

// export default BookingsDashboard;
