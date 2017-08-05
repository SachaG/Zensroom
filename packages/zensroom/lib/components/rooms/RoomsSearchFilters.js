import React, { Component } from 'react';
import { Components } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Checkbox } from 'formsy-react-components';
import { amenities, spaces } from '../../modules/data';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const encodeObject = obj => _.map(obj, (value, key) => `${key}=${value}`).join('&');
const encodeArray = array => _.map(array, (value) => `filters=${value}`).join('&');

class RoomsSearchFilters extends Component {

  constructor(props) {
    super(props);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.getURLFilters = this.getURLFilters.bind(this);
  }

  // get filters from URL
  // Note: handle cases where there's 0 filters, 1 filter, or 2+ filters
  getURLFilters() {
    const filters = this.props.location.query.filters;
    return filters ? Array.isArray(filters) ? filters : [filters] : [];
  }

  // toggle filter on/off
  toggleFilter(filterName) {

    let filters = this.getURLFilters();

    if(_.contains(filters, filterName)) {
      // if URL contains filter, remove it
      filters = _.without(filters, filterName);
    } else {
      // if URL doesn't contain filter, add it
      filters.push(filterName);
    }

    // remove old filters
    const query = _.clone(this.props.location.query);
    delete query.filters;

    // build URL from current query string and new filters object
    let newUrl = `/search?`;
    newUrl += encodeObject(query);
    if (filters.length) {
      newUrl += `&${encodeArray(filters)}`;
    }

    // console.log(query)
    // console.log(filters)
    // console.log(newUrl)

    // replace URL
    this.props.router.replace(newUrl);
  }

  render() {
    const filters = this.getURLFilters();
    
    return (
      <div className="rooms-search-filters">
        <h2 className="section-title"><FormattedMessage id="rooms.filters"/></h2>
        <ul className="rooms-search-filters-list">
          {amenities.map(({label, value}, index) => 
            <li className="rooms-search-filter" key={index}>
              <label>
                <input type="checkbox" name={value} checked={_.contains(filters, value)} onChange={() => this.toggleFilter(value)} /> {label}
              </label>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default withRouter(RoomsSearchFilters);