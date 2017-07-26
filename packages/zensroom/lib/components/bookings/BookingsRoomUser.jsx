import React from 'react';
import { Components, registerComponent, withList } from 'meteor/vulcan:core';

import Bookings from '../../modules/bookings/collection.js';

const BookingsRoomUser = ({loading, results, currentUser}) =>

  <div className="card">

    <h4>Your bookings for this room</h4>
    
    {loading ? <p>Loading…</p> :

      results.map(booking => <Components.Card key={booking._id} collection={Bookings} document={booking}/>)
    
    }
  
  </div>

const options = {
  collection: Bookings
}

export default withList(options)(BookingsRoomUser);