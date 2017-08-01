import React from 'react';
import { Components, registerComponent, withList, withCurrentUser } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Bookings from '../../modules/bookings/collection.js';

const BookingsList = ({loading, results, currentUser }) =>

  <div className="bookings-list">
    
    <h3><FormattedMessage id='bookings.bookings'/></h3>

    {loading ? <Components.Loading/> :

      <div>
    
        {results.map(booking => <Components.Card currentUser={currentUser} className="card" key={booking._id} collection={Bookings} document={booking}/>)}
    
      </div>
    }
  
  </div>

const options = {
  collection: Bookings
}

export default compose(
  withCurrentUser,
  withList(options),
)(BookingsList);