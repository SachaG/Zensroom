import React from 'react';

const ReviewsItem = ({ review }) => 
  
  <div className="reviews-item">

    {review.comment}

  </div>

export default ReviewsItem;