import React, { Component } from 'react';
import { Components, registerComponent, withCurrentUser, getFragment, withMessages, withNew } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import DateTimePicker from 'react-datetime';
import Button from 'react-bootstrap/lib/Button';
import gql from 'graphql-tag';
import moment from 'moment';

import Bookings from '../../modules/bookings/collection';
import withAvailableDates from '../../containers/withAvailableDates';

class BookingsNewForm extends Component {

  constructor() {
    super();

    this.success = this.success.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateFromDate = this.updateFromDate.bind(this);
    this.updateToDate = this.updateToDate.bind(this);

    this.state = {
      from: null,
      to: null
    }
  }

  updateFromDate(date) {
    this.setState({ from: date.toDate() });
  }

  updateToDate(date) {
    this.setState({ to: date.toDate() });
  }

  success(booking) {
    this.props.router.push({pathname: `/booking/${booking._id}`});
    this.props.flash('Booking created', 'success');
  }

  submitForm() {
    this.props.newMutation({document: {
      startAt: this.state.from,
      endAt: this.state.to,
      roomId: this.props.room._id
    }}).then(result => this.success(result.data.BookingsNew));
  }

  render() {

    return (
    <div>

    {Bookings.options.mutations.new.check(this.props.currentUser) ?
      <div>
        <div>
          <label className="control-label">From</label>
          <DateTimePicker
            onChange={newDate => this.updateFromDate(newDate)}
            format={"x"}
            isValidDate={(currentDate, selectedDate) => {
              const yesterday = moment().subtract( 1, 'day' );
              return currentDate.isAfter(yesterday);
            }}
          />
        </div>

        <div>
          <label className="control-label">To</label>
          <DateTimePicker
            onChange={newDate => this.updateToDate(newDate)}
            format={"x"}
            isValidDate={(currentDate, selectedDate) => {
              const yesterday = moment().subtract( 1, 'day' );
              return currentDate.isAfter(yesterday) && currentDate.isAfter(moment(this.state.from));
            }}
          />
        </div>
        <Button bsStyle="primary" onClick={this.submitForm}>Book this room</Button>

      </div> :
      null
    }

    </div>

    )
  }
}

const options = {
  collection: Bookings,
  fragment: gql`
    fragment BookingFragment on Booking {
      __typename
      _id
      createdAt
      userId
      roomId
      startAt
      endAt
      paidAt
    }
  `
}

export default compose(
  withNew(options),
  withRouter,
  withMessages,
  withCurrentUser,
  // withAvailableDates,
)(BookingsNewForm);