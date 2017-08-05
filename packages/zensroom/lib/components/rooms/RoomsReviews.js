import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import ReviewsList from '../reviews/ReviewsList';
import ReviewsNewForm from '../reviews/ReviewsNewForm';

const RoomsReviews = ({ room, currentUser }) => 
  <div className="rooms-reviews">

    <ReviewsList terms={{view: 'roomReviews', roomId: room._id}} />

    {currentUser ? 
      <div>
        <h5><FormattedMessage id="reviews.leave_review"/></h5>
        <ReviewsNewForm roomId={room._id}/>
      </div>
    : null}

  </div>

export default RoomsReviews;