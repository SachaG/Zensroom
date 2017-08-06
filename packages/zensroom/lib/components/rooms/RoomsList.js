import React from 'react';
import { Components, registerComponent, withList, withCurrentUser } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection';
// import RoomsItem from './RoomsItem';

const RoomsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div>

    {loading ? 

      <Components.Loading /> :

      <div className="rooms-grid">

        {results.map(room => <Components.RoomsItem key={room._id} room={room} currentUser={currentUser} />)}
        
        {totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}><FormattedMessage id="rooms.load_more"/> ({count}/{totalCount})</a> 
        : null}

      </div>
    }

  </div>

const options = {
  collection: Rooms
};

registerComponent('RoomsList', RoomsList, [withList, options], withCurrentUser);

export default withList(options)(withCurrentUser(RoomsList));