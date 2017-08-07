/*

Room search results. Wrapped with withList.

http://docs.vulcanjs.org/data-loading.html#List-Resolver

*/

import React from 'react';
import { Components, registerComponent, withList } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection';
// import RoomsItem from './RoomsItem';

const getCoords = room => room.location && {lng: room.location.coordinates[0], lat: room.location.coordinates[1]};

const RoomsSearchResults = ({results = [], currentUser, loading, loadMore, count, totalCount, terms, onMapChange, mapProps}) => 
  
  <div className="rooms-search-results">

    <h2 className="section-title"><FormattedMessage id="rooms.search_results"/></h2>

    {loading ? 

      <Components.Loading /> :

      <div className="rooms-search-results-contents">

        <Components.Map className="rooms-search-results-map" onChange={onMapChange} style={{width: '100%'}} center={{lat: parseFloat(mapProps.lat), lng: parseFloat(mapProps.lng)}} coordinates={results.map(getCoords)} />

        <div className="rooms-grid">
          {results.map(room => <Components.RoomsItem key={room._id} room={room} currentUser={currentUser} />)}
          
          {totalCount > results.length ?
            <a href="#" onClick={e => {e.preventDefault(); loadMore();}}><FormattedMessage id="rooms.load_more"/> ({count}/{totalCount})</a>
          : null }
        </div>

      </div>
    }

  </div>


const mapPropsFunction = props => ({...props, terms: {...props.location.query}});

const options = {
  collection: Rooms,
  enableReducer: false
}

registerComponent('RoomsSearchResults', RoomsSearchResults, [withList, options]);

export default withList(options)(RoomsSearchResults);