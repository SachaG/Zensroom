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
  <div>
    <Components.Avatar size="small" user={document.user} link />
    <Link to={`users/${document.user.slug}`}>
      {document.user.displayName}
    </Link>
  </div>;

const BookingRoom = ({ document }) =>
  <div>
    <Link to={`room/${document.roomId}`}>
      <p>{document.room.name}</p>
    </Link>
    <Link to={`room/${document.roomId}`}>
      <img src={document.room.photos[0][1].url} alt=""/>
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
        'startAt',
        'endAt',
        'endAt',
        'numberOfGuests',
        'paidAt',
        {
          name: 'user',
          component: BookingUser
        },
        {
          name: 'Price',
          component: BookingPrice
        },
        {
          name: 'Room',
          component: BookingRoom
        }
      ]}
    />

  </div>

registerComponent('BookingsDashboard', BookingsDashboard);

export default BookingsDashboard;
