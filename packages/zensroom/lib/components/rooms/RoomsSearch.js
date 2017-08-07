/*

Room search

*/

import React, { Component } from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';

// import RoomsSearchForm from './RoomsSearchForm';
// import RoomsSearchResults from './RoomsSearchResults';
// import RoomsSearchFilters from './RoomsSearchFilters';

class RoomsSearch extends Component {

  constructor(props) {
    super(props);
    this.onMapChange = this.onMapChange.bind(this);

    // initialize state with lat/lng values provided by the URL query parameters
    this.state = {
      from: props.location.query.from,
      to: props.location.query.to,
      lat: props.location.query.lat,
      lng: props.location.query.lng,
    };

  }

  onMapChange(mapData) {
    // whenever map changes, update this component's state
    const { center, zoom, bounds, marginBounds, size } = mapData;
    this.setState({
      lat: center.lat,
      lng: center.lng,
      sw: bounds.sw,
      ne: bounds.ne,
    });
  }

  render() {
    // mapsProps object to center map on lat/lng and terms object to perform server query
    // Note: terms will not have sw/ne until onMapChange triggers for the first time.
    return (
      <div>
        <Components.RoomsSearchForm />
        <Components.RoomsSearchFilters />
        <Components.RoomsSearchResults 
          onMapChange={this.onMapChange} 
          mapProps={{
            lat: this.state.lat, 
            lng: this.state.lng
          }} 
          terms={{
            from: this.state.from, 
            to: this.state.to, 
            sw: this.state.sw, 
            ne: this.state.ne,
            filters: this.props.location.query.filters,
          }} 
        />
      </div>
    )
  }
}

registerComponent('RoomsSearch', RoomsSearch, withRouter);

export default withRouter(RoomsSearch);