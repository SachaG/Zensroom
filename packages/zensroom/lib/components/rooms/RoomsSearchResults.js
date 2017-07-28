import React from 'react';
import { Components } from 'meteor/vulcan:core';

import RoomsItem from './RoomsItem';
import withSearch from '../../containers/withSearch';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import { withRouter } from 'react-router';

const RoomsSearchResults = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div>

    <h2>Search results</h2>

    {loading ? 

      <Components.Loading /> :

      <div className="rooms">

        {results.map(room => <RoomsItem key={room._id} room={room} currentUser={currentUser} />)}
        
        {totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>Load More ({count}/{totalCount})</a> : 
          <p>No more items.</p>
        }

      </div>
    }

  </div>


const mapPropsFunction = props => ({...props, terms: {...props.location.query}});

export default compose(
  withRouter,
  mapProps(mapPropsFunction),
  withSearch,
)(RoomsSearchResults);