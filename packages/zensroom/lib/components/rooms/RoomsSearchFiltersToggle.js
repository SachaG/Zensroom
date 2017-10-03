/*

Room search filters

*/

import React, { Component } from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Button from 'react-bootstrap/lib/Button';
import { withRouter } from 'react-router';

class RoomsSearchFiltersToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFilters: false
    }
  }

  // get filters from URL
  // Note: handle cases where there's 0 filters, 1 filter, or 2+ filters
  getURLFilters() {
    const filters = this.props.location.query.filters;
    return filters ? Array.isArray(filters) ? filters : [filters] : [];
  }

  toggleFilters = (e) => {
    e.preventDefault();
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  render() {
    
    const filtersCount = this.getURLFilters().length;

    return (
      <div className="rooms-search-form-field rooms-search-filters-toggle">
        <Button className="rooms-search-filters-button" bsStyle="info" onClick={this.toggleFilters}>
          <FormattedMessage id="rooms.filters_toggle"/>
          {filtersCount > 0 ? <span className="filters-count">{filtersCount}</span> : null}
        </Button>
        {this.state.showFilters ? <Components.RoomsSearchFilters/> : null}
      </div>
    )
  }
}

registerComponent('RoomsSearchFiltersToggle', RoomsSearchFiltersToggle, withRouter);

// export default withRouter(RoomsSearchFilters);