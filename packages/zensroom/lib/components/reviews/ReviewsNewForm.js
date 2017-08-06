import React from 'react';
import { Components, registerComponent, withCurrentUser, getFragment, withMessages } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { intlShape, FormattedMessage } from 'meteor/vulcan:i18n';

import Reviews from '../../modules/reviews/collection.js';

const ReviewsNewForm = ({roomId, currentUser, router, flash}, {intl}) =>

  <div>
    {Reviews.options.mutations.new.check(currentUser, { roomId }) ?

      <div>
        <h5><FormattedMessage id="reviews.leave_review"/></h5>
        <Components.SmartForm 
          collection={Reviews}
          /*mutationFragment={getFragment('ReviewsNewFormItemFragment')}*/
          prefilledProps={{ roomId }}
          successCallback={review => {
            flash(intl.formatMessage({id: 'reviews.created'}), 'success');
          }}
        /> 
      </div>:
      null
    }
  </div>

ReviewsNewForm.contextTypes = {
  intl: intlShape
};

registerComponent('ReviewsNewForm', ReviewsNewForm, withMessages, withCurrentUser);

export default compose(
  withMessages,
  withCurrentUser
)(ReviewsNewForm);