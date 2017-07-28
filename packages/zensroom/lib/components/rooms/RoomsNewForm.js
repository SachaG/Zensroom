import React from 'react';
import { Components, registerComponent, withCurrentUser, getFragment, withMessages } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';

import Rooms from '../../modules/rooms/collection.js';

const RoomsNewForm = ({currentUser, closeModal, router, flash}) =>

  <div>

    {Rooms.options.mutations.new.check(currentUser) ?
      <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc'}}>
        <h4>Insert New Document</h4>
        <Components.SmartForm 
          collection={Rooms}
          /*mutationFragment={getFragment('RoomsItemFragment')}*/
          successCallback={room => {
            closeModal();
            router.push({pathname: `/room/${room._id}`});
            flash('New room created', 'success');
          }}
        /> 
      </div> :
      null
    }

  </div>

export default compose(
  withRouter,
  withMessages,
  withCurrentUser
)(RoomsNewForm);