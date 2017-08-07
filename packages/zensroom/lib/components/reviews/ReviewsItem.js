/*

Review list item

*/

import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const ReviewsItem = ({ review }) => 
  
  <div className="reviews-item">

    {review.comment}

  </div>

registerComponent('ReviewsItem', ReviewsItem);

export default ReviewsItem;