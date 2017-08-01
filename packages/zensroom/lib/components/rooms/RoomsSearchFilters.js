import React, { Component } from 'react';
import { Components } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Checkbox } from 'formsy-react-components';
import { amenities, spaces } from '../../modules/data';

class RoomsSearchFilters extends Component {

  constructor(props) {
    super(props);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.state = {}
    amenities.forEach(({label, value}) => {this.state[value] = !!props.location.query[value]});
  }

  toggleFilter(filterName) {
    const queryParams = _.clone(this.props.location.query);
    if(this.state[filterName]) {
      // remove filter
      delete queryParams[filterName];
    } else {
      // add filter
      queryParams[filterName] = 1;
    }
    const newUrl = `/search?${_.map(queryParams, ((value, key) => `${key}=${value}`)).join('&')}`
    this.props.router.replace(newUrl);
    this.setState({
      [filterName]: !this.state[filterName]
    });
  }

  render() {
    return (
      <div>
        <ul>
          {amenities.map(({label, value}, index) => 
            <li key={index}>
              <label>
                <input type="checkbox" name={value} checked={this.state[value]} onChange={() => this.toggleFilter(value)} /> {label}
              </label>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default withRouter(RoomsSearchFilters);