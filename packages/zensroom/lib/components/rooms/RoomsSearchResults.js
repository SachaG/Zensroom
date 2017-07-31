import React from 'react';
import { Components } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import RoomsItem from './RoomsItem';
import withSearch from '../../containers/withSearch';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import { withRouter } from 'react-router';

const getCoords = room => room.location && {lng: room.location.coordinates[0], lat: room.location.coordinates[1]};

const RoomsSearchResults = ({results = [], currentUser, loading, loadMore, count, totalCount, terms}) => 
  
  <div>

    <h2><FormattedMessage id="rooms.search_results"/></h2>

    {loading ? 

      <Components.Loading /> :

      <div className="rooms">

        <Components.Map center={{lat: parseFloat(terms.lat), lng: parseFloat(terms.lng)}} coordinates={results.map(getCoords)} />

        {results.map(room => <RoomsItem key={room._id} room={room} currentUser={currentUser} />)}
        
        {totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}><FormattedMessage id="rooms.load_more"/> ({count}/{totalCount})</a>
        : null }

      </div>
    }

  </div>


const mapPropsFunction = props => ({...props, terms: {...props.location.query}});

export default compose(
  withRouter,
  mapProps(mapPropsFunction),
  withSearch,
)(RoomsSearchResults);