import React from 'react';
import { Components, registerComponent, withList, withCurrentUser } from 'meteor/vulcan:core';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Bookings from '../../modules/bookings/collection.js';

const BookingsRoomUser = ({loading, results }) =>

  <div className="room-bookings">
    
    <h3><FormattedMessage id='bookings.bookings'/></h3>

    {loading ? <Components.Loading/> :

      <div>
    
        {results.length ? <h5><FormattedMessage id='bookings.your_bookings'/></h5> : <h5><FormattedMessage id='bookings.no_bookings'/></h5>}
        {results.map(booking => <Components.Card fields={['startAt', 'endAt']} className="card" key={booking._id} collection={Bookings} document={booking}/>)}
    
      </div>
    }
  
  </div>

const options = {
  collection: Bookings
}

export default compose(
  withList(options),
)(BookingsRoomUser);