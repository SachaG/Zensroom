import React, { Component } from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import FRC from 'formsy-react-components';
import { withRouter } from 'react-router'
import DateTimePicker from 'react-datetime';
import Button from 'react-bootstrap/lib/Button';

class RoomsSearchForm extends Component {
  constructor() {
    super();
    this.updateFromDate = this.updateFromDate.bind(this);
    this.updateToDate = this.updateToDate.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateFromDate(date) {
    this.setState({ from: date.format('YYYY-MM-DD') });
  }

  updateToDate(date) {
    this.setState({ to: date.format('YYYY-MM-DD') });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.router.push(`/search?from=${this.state.from}&to=${this.state.to}`)
  }
  render() {

    return (
      <div className="card rooms-search-form">
        <div>
          <label className="control-label">From</label>
          <DateTimePicker
            onChange={newDate => this.updateFromDate(newDate)}
            format={"x"}
          />
        </div>

        <div>
          <label className="control-label">To</label>
          <DateTimePicker
            onChange={newDate => this.updateToDate(newDate)}
            format={"x"}
          />
        </div>

        <Button bsStyle="primary" onClick={this.submitForm}>Search</Button>
      
      </div>
    );
  }

}

export default withRouter(RoomsSearchForm);