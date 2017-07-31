import React from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Reviews from '../../modules/reviews/collection';

const ReviewsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div>

    {loading ? 

      <Loading /> :

      <div className="reviews">

        <h3><FormattedMessage id="reviews.reviews"/></h3>
        
        {results.map(review => <Components.Card className="card" key={review._id} collection={Reviews} document={review} currentUser={currentUser} fields={['comment']}/>)}
        
        {totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>Load More ({count}/{totalCount})</a>
        : null}

      </div>
    }

  </div>

const options = {
  collection: Reviews
};

export default withList(options)(withCurrentUser(ReviewsList));