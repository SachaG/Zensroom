import React from 'react';
import { Components, registerComponent, withCurrentUser, getFragment, withMessages } from 'meteor/vulcan:core';
import compose from 'recompose/compose';

import Reviews from '../../modules/reviews/collection.js';

const ReviewsNewForm = ({roomId, currentUser, router, flash}) =>

  <div>

    {Reviews.options.mutations.new.check(currentUser) ?
      <Components.SmartForm 
        collection={Reviews}
        /*mutationFragment={getFragment('ReviewsNewFormItemFragment')}*/
        prefilledProps={{ roomId }}
        successCallback={review => {
          flash('Review created', 'success');
        }}
      /> :
      null
    }

  </div>

export default compose(
  withMessages,
  withCurrentUser
)(ReviewsNewForm);