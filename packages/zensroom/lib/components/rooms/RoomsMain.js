import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Components, registerComponent } from 'meteor/vulcan:core';

import Rooms from '../../modules/rooms/collection';

// import RoomsReviews from './RoomsReviews';

const RoomsMain = ({ room, currentUser }) => 

  <div className="rooms-main">
    
    <div className="rooms-section">

      <h2 className="rooms-name">{room.name}</h2>
      <h4 className="rooms-city">{room.city}</h4>

      <div className="rooms-description">{room.description}</div>

      <div className="rooms-amenities"><ul>{room.amenities.map(amenity => <li key={amenity}>{amenity}</li>)}</ul></div>

      <Components.Card fields={['roomType', 'propertyType', 'rules', 'bedsNumber', 'guestsNumber', 'country', 'zipCode', 'city', 'address', 'address2']} collection={Rooms} document={room} currentUser={currentUser} />

    </div>

    <div className="rooms-section">
      {room.location ? <Components.Map coordinates={[{lat: room.location.coordinates[1], lng: room.location.coordinates[0]}]} center={{lat: room.location.coordinates[1], lng: room.location.coordinates[0]}} /> : null}
    </div>

    <div className="rooms-section">
      <Components.RoomsReviews room={room} currentUser={currentUser}/>
    </div>

  </div>

registerComponent('RoomsMain', RoomsMain);

export default RoomsMain;