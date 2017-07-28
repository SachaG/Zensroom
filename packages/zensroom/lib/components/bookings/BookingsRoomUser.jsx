import React from 'react';
import { Components, registerComponent, withList } from 'meteor/vulcan:core';

import Bookings from '../../modules/bookings/collection.js';

const BookingsRoomUser = ({loading, results }) =>

  <div className="room-bookings">
    
    <h3>Bookings</h3>

    {loading ? <p>Loading…</p> :

      <div>
    
        {results.length ? <h5>Your bookings for this room:</h5> : <h5>No bookings for this room yet.</h5>}
        {results.map(booking => <Components.Card className="card" key={booking._id} collection={Bookings} document={booking}/>)}
    
      </div>
    }
  
  </div>

const options = {
  collection: Bookings
}

export default withList(options)(BookingsRoomUser);