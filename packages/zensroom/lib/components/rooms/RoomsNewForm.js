import React from 'react';
import { Components, registerComponent, withCurrentUser, getFragment } from 'meteor/vulcan:core';

import Rooms from '../../modules/rooms/collection.js';

const RoomsNewForm = ({currentUser}) =>

  <div>

    {Rooms.options.mutations.new.check(currentUser) ?
      <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc'}}>
        <h4>Insert New Document</h4>
        <Components.SmartForm 
          collection={Rooms}
          /*mutationFragment={getFragment('RoomsItemFragment')}*/
        /> 
      </div> :
      null
    }

  </div>

export default withCurrentUser(RoomsNewForm);