/*

Room search results. Wrapped with withList.

http://docs.vulcanjs.org/data-loading.html#List-Resolver

*/

import React from 'react';
import { Components, registerComponent, withList } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection';
// import RoomsItem from './RoomsItem';

const defaultMapProperties = {lat: 35.6895, lng: 139.6917, type: 'country'}; // Tokyo, Japan

const getCoords = room => room.location && {lng: room.location.coordinates[0], lat: room.location.coordinates[1]};

const getZoom = type => {
  switch(type) {
    case 'country': 
      return 4;
    case 'locality':
      return 10;
    case 'street_address': 
      return 15;
  }
}

const RoomsSearchResults = ({results = [], currentUser, loading, loadMore, count, totalCount, terms, onMapChange, mapProperties}) => {
  
  return loading ? 

    <Components.Loading /> :

    <div className="rooms-search-results">

      <div className="rooms-search-results-map">

        <Components.Map 
          onChange={onMapChange} 
          style={{width: '100%', height: '100%'}} 
          center={{lat: parseFloat(mapProperties.lat || defaultMapProperties.lat), lng: parseFloat(mapProperties.lng || defaultMapProperties.lng)}} 
          coordinates={_.compact(results.map(getCoords))}
          zoom={getZoom(mapProperties.type || defaultMapProperties.type)}
        />

      </div>

      <div className="rooms-search-results-grid">

        <h2 className="section-title"><FormattedMessage id="rooms.search_results"/></h2>

        <div className="rooms-grid">

          {results.map(room => <Components.RoomsItem key={room._id} room={room} currentUser={currentUser} />)}
          
          {totalCount > results.length ?
            <a href="#" onClick={e => {e.preventDefault(); loadMore();}}><FormattedMessage id="rooms.load_more"/> ({count}/{totalCount})</a>
          : null }

        </div>

      </div>

    </div>
}



// const mapPropsFunction = props => ({...props, terms: {...props.location.query}});

const options = {
  collection: Rooms,
  enableReducer: false
}

registerComponent('RoomsSearchResults', RoomsSearchResults, [withList, options]);

// export default withList(options)(RoomsSearchResults);