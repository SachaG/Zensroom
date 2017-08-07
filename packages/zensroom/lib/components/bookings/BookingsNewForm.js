/*

Form for inserting a new booking, wrapped with withNew HoC.

http://docs.vulcanjs.org/mutations.html#Higher-Order-Components

*/

import React, { Component } from 'react';
import { Components, registerComponent, withCurrentUser, getFragment, withMessages, withNew } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import DateTimePicker from 'react-datetime';
import Button from 'react-bootstrap/lib/Button';
import gql from 'graphql-tag';
import moment from 'moment';
import { intlShape, FormattedMessage } from 'meteor/vulcan:i18n';
import { Form, Input } from 'formsy-react-components';

import Bookings from '../../modules/bookings/collection';
import withUnavailableDates from '../../containers/withUnavailableDatesContainer';

class BookingsNewForm extends Component {

  constructor() {
    super();

    this.success = this.success.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateFromDate = this.updateFromDate.bind(this);
    this.updateToDate = this.updateToDate.bind(this);
    this.updateGuests = this.updateGuests.bind(this);
    this.isAvailable = this.isAvailable.bind(this);
    
    this.state = {
      from: null,
      to: null,
      numberOfGuests: 0,
    }
  }

  updateFromDate(date) {
    this.setState({ from: date });
  }

  updateToDate(date) {
    this.setState({ to: date });
  }

  updateGuests(name, value) {
    this.setState({
      numberOfGuests: parseInt(value)
    });
  }

  success(booking) {
    this.props.router.push({pathname: `/booking/${booking._id}`});
    this.props.flash(this.context.intl.formatMessage({id: 'bookings.created'}), 'success');
  }

  submitForm(data) {
    if (!this.props.currentUser) {
      this.props.flash(this.context.intl.formatMessage({id: 'users.please_log_in'}), 'error');
    } else {
      console.log('submitForm')
      console.log(data)
      this.props.newMutation({document: {
        startAt: this.state.from.toDate(),
        endAt: this.state.to.toDate(),
        numberOfGuests: this.state.numberOfGuests,
        roomId: this.props.room._id
      }}).then(result => this.success(result.data.BookingsNew));
    }
  }

  isAvailable(mDate) {
    const unavailableDates = this.props.unavailableDates && this.props.unavailableDates.map(date => moment(new Date(date)).startOf('day').toString());
    return !_.contains(unavailableDates, mDate.toString())
  }

  render() {

    const numberOfNights = this.state.from && this.state.to ? this.state.to.diff(this.state.from, 'days') : 0;

    return (
    <Form onSubmit={this.submitForm}>

      <div className="bookings-form">

        <h3>Total Price: ${this.props.room.pricePerNight * this.state.numberOfGuests * numberOfNights}</h3>

        <div className="bookings-form-field">
          <label className="control-label"><FormattedMessage id="bookings.from" /></label>
          <DateTimePicker
            onChange={newDate => this.updateFromDate(newDate)}
            format={"x"}
            isValidDate={(currentDate, selectedDate) => {
              const yesterday = moment().subtract( 1, 'day' );
              return currentDate.isAfter(yesterday) && this.isAvailable(currentDate);
            }}
            timeFormat={false}
          />
        </div>

        <div className="bookings-form-field">
          <label className="control-label"><FormattedMessage id="bookings.to" /></label>
          <DateTimePicker
            onChange={newDate => this.updateToDate(newDate)}
            format={"x"}
            isValidDate={(currentDate, selectedDate) => {
              const yesterday = moment().subtract( 1, 'day' );
              return currentDate.isAfter(yesterday) && currentDate.isAfter(moment(this.state.from)) && this.isAvailable(currentDate);
            }}
            timeFormat={false}
          />
        </div>

        <div className="bookings-form-field">
          <label className="control-label"><FormattedMessage id="bookings.number_of_guests" /></label>
          <Input layout="elementOnly" onChange={this.updateGuests} value={this.state.numberOfGuests} name="numberOfGuests" type="text"/>
        </div>

        <Button className="bookings-form-submit" type="submit" bsStyle="primary"><FormattedMessage id="bookings.book" /></Button>

      </div> 

    </Form>

    )
  }
}

BookingsNewForm.contextTypes = {
  intl: intlShape
};

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

registerComponent('BookingsNewForm', BookingsNewForm, [withNew, options], withRouter, withMessages, withCurrentUser, withUnavailableDates);

export default compose(
  withNew(options),
  withRouter,
  withMessages,
  withCurrentUser,
  withUnavailableDates,
)(BookingsNewForm);