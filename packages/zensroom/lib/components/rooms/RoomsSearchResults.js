import React from 'react';
import { Components } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import RoomsItem from './RoomsItem';
import withSearch from '../../containers/withSearch';

const getCoords = room => room.location && {lng: room.location.coordinates[0], lat: room.location.coordinates[1]};

const RoomsSearchResults = ({results = [], currentUser, loading, loadMore, count, totalCount, terms, onMapChange, mapProps}) => 
  
  <div>

    <h2><FormattedMessage id="rooms.search_results"/></h2>

    {loading ? 

      <Components.Loading /> :

      <div className="rooms">

        <Components.Map onChange={onMapChange} style={{width: 500}} center={{lat: parseFloat(mapProps.lat), lng: parseFloat(mapProps.lng)}} coordinates={results.map(getCoords)} />

        {results.map(room => <RoomsItem key={room._id} room={room} currentUser={currentUser} />)}
        
        {totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}><FormattedMessage id="rooms.load_more"/> ({count}/{totalCount})</a>
        : null }

      </div>
    }

  </div>


const mapPropsFunction = props => ({...props, terms: {...props.location.query}});

export default withSearch(RoomsSearchResults);