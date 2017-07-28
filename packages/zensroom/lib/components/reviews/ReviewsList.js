import React from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';

import Reviews from '../../modules/reviews/collection';

const ReviewsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div>

    {loading ? 

      <Loading /> :

      <div className="reviews">

        <h3>Reviews</h3>
        
        {results.map(review => <Components.Card className="card" key={review._id} collection={Reviews} document={review} currentUser={currentUser} fields={['userId', 'comment']}/>)}
        
        {totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>Load More ({count}/{totalCount})</a> : 
          <p>No more items.</p>
        }

      </div>
    }

  </div>

const options = {
  collection: Reviews
};

export default withList(options)(withCurrentUser(ReviewsList));