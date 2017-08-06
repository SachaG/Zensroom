import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

// import ReviewsList from '../reviews/ReviewsList';
// import ReviewsNewForm from '../reviews/ReviewsNewForm';

const RoomsReviews = ({ room, currentUser }) => 
  <div className="rooms-reviews">

    <Components.ReviewsList terms={{view: 'roomReviews', roomId: room._id}} />

    {currentUser ? <Components.ReviewsNewForm roomId={room._id}/>: null}

  </div>

registerComponent('RoomsReviews', RoomsReviews);

export default RoomsReviews;