import React from 'react';
import { Components, registerComponent, withCurrentUser, getFragment, withMessages } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';

import Bookings from '../../modules/bookings/collection.js';

const BookingsNewForm = ({room, currentUser, router, flash}) =>

  <div>

    {Bookings.options.mutations.new.check(currentUser) ?
      <Components.SmartForm 
        collection={Bookings}
        /*mutationFragment={getFragment('BookingsNewFormItemFragment')}*/
        prefilledProps={{roomId: room._id}}
        successCallback={booking => {
          router.push({pathname: `/booking/${booking._id}`});
          flash('Booking created', 'success');
        }}
      /> :
      null
    }

  </div>

export default compose(
  withRouter,
  withMessages,
  withCurrentUser
)(BookingsNewForm);