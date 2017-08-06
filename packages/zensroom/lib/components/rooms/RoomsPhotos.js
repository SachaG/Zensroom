import React, { PureComponent } from 'react';
import { Components, registerComponent, withCurrentUser, withDocument } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Rooms from '../../modules/rooms/collection';

class RoomsPhotos extends PureComponent {

  constructor() {
    super();
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      selected: 0
    };
  }

  previous(e) {
    e.preventDefault();
    const totalPhotos = this.props.room.photos.length;
    this.setState({
      selected: this.state.selected === 0 ? totalPhotos - 1 : this.state.selected - 1
    });
  }

  next(e) {
    e.preventDefault();
    const totalPhotos = this.props.room.photos.length;
    this.setState({
      selected: this.state.selected === totalPhotos - 1 ? 0 : this.state.selected + 1
    });
  }

  render() {
  
    return(
      <div className="rooms-photos">

        <img className="rooms-photos-image" src={this.props.room.photos[this.state.selected][2].secure_url}/>
        <a className="rooms-photos-previous" href="javascript:void(0)" onClick={this.previous}><Components.Icon name="previous"/></a>
        <a className="rooms-photos-next" href="javascript:void(0)" onClick={this.next}><Components.Icon name="next"/></a>

      </div>
    )
  }
}

RoomsPhotos.displayName = 'RoomsPhotos';

registerComponent('RoomsPhotos', RoomsPhotos);

export default RoomsPhotos;