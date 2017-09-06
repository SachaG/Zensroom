/*

Show a list of all reviews

http://docs.vulcanjs.org/core-components.html#Datatable

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Reviews from '../../modules/reviews/collection.js';

const ReviewsDashboard = () =>

  <div className="reviews-dashboard">
    
    <h3><FormattedMessage id='reviews.reviews'/></h3>

    <Components.Datatable 
      collection={Reviews} 
      columns={['comment']}
      showEdit={true}
    />
  
  </div>

registerComponent('ReviewsDashboard', ReviewsDashboard);

// export default ReviewsDashboard;