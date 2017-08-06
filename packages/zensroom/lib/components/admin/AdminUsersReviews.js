import React from 'react';
import { Link } from 'react-router';
import { registerComponent, Utils } from 'meteor/vulcan:core';

const AdminUsersReviews = ({ document: user }) => 
  <ul>
    {user.reviews && user.reviews.map(review => 
      <li key={review._id}><Link to={`/review/${review._id}`}>{Utils.trimWords(review.comment, 15)}</Link></li>
    )}
  </ul>

registerComponent('AdminUsersReviews', AdminUsersReviews);

export default AdminUsersReviews;