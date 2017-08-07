/*

List of reviews, wrapped with withList

http://docs.vulcanjs.org/data-loading.html#List-Resolver

*/

import React from 'react';
import { Components, registerComponent, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Reviews from '../../modules/reviews/collection';

import ReviewsItem from './ReviewsItem';

const ReviewsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div>

    {loading ? 

      <Loading /> :

      <div className="reviews">

        <h3><FormattedMessage id="reviews.reviews"/></h3>
        
        {results.map(review => <Components.ReviewsItem key={review._id} review={review} currentUser={currentUser} />)}
        
        {totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>Load More ({count}/{totalCount})</a>
        : null}

      </div>
    }

  </div>

const options = {
  collection: Reviews
};

registerComponent('ReviewsList', ReviewsList, [withList, options], withCurrentUser);

export default withList(options)(withCurrentUser(ReviewsList));