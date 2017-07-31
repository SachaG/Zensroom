import React, { Component } from 'react';
import { Components, registerComponent, getSetting } from 'meteor/vulcan:core';
import GoogleMap from 'google-map-react';

const Marker = () => (
  <div className="map-marker" style={{color: '#D22115', fontSize: 24}}><Components.Icon name="marker"/></div>
);

class Map extends Component {

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 15
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: 300}}>
        <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key: getSetting('googlemaps').apiKey
        }}
        >
          {this.props.coordinates.map((coord, index) => <Marker key={index} lat={coord.lat} lng={coord.lng} />)}

        </GoogleMap>
      </div>
    )
  }
}

registerComponent('Map', Map);
