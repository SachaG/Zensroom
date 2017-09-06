import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import compose from 'recompose/compose';


const BookingsFuturePage = ({currentUser}) => {
  // console.log(currentUser)
  return (
    <div>
      <Components.BookingsFuture terms={{view: 'userBookingsFuture', bookings: currentUser.bookings, userId: currentUser._id}}/>
    </div>
  )
};


registerComponent('BookingsFuturePage', BookingsFuturePage, withCurrentUser);

export default compose(
  withCurrentUser,
)(BookingsFuturePage);
