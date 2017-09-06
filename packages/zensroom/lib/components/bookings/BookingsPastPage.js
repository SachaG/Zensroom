import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import compose from 'recompose/compose';


const BookingsPastPage = ({currentUser}) => {
  // console.log(currentUser)
  return (
    <div>
      <Components.BookingsPast terms={{view: 'userBookingsPast', bookings: currentUser.bookings, userId: currentUser._id}}/>
    </div>
  )
};


registerComponent('BookingsPastPage', BookingsPastPage, withCurrentUser);

export default compose(
  withCurrentUser,
)(BookingsPastPage);
