/*

Form for inserting a new booking, wrapped with withNew HoC.

http://docs.vulcanjs.org/mutations.html#Higher-Order-Components

*/

import React, { Component } from 'react';
import { Components, registerComponent, withCurrentUser, getFragment, getSetting, withMessages, withNew, addCallback } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import DateTimePicker from 'react-datetime';
import Button from 'react-bootstrap/lib/Button';
import gql from 'graphql-tag';
import moment from 'moment';
import { intlShape, FormattedMessage } from 'meteor/vulcan:i18n';
import { Form, Select } from 'formsy-react-components';

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
    this.createNewBooking = this.createNewBooking.bind(this);

    this.state = {
      from: null,
      to: null,
      numberOfGuests: 1,
      disabled: false
    }
  }

  updateFromDate(date) {
    this.setState({ from: date });
    if (date > this.state.to) {
      this.setState({
        to: date.clone().add('days', 1)
      })
    }
  }

  updateToDate(date) {
    this.setState({ to: date });
  }

  updateGuests(name, value) {
    this.setState({
      numberOfGuests: parseInt(value || 1)
    });
  }

  /*

  Helper to tell if a date is available

  */
  isAvailable(mDate) {
    const unavailableDates = this.props.unavailableDates && this.props.unavailableDates.map(date => moment(new Date(date)).startOf('day').toString());
    return !_.contains(unavailableDates, mDate.toString())
  }

  /*

  Form submit handler

  */
  submitForm(data) {

    // disable form to prevent multiple submissions
    this.setState({ disabled: true });

    // if fields are missing, show message and abort submission
    if (!this.state.from || !this.state.to || !this.state.numberOfGuests) {
      alert(this.context.intl.formatMessage({id: 'bookings.please_fill_in_all_fields'}));
      this.setState({ disabled: false });
      return;
    }

    // create alias for this.createNewBooking
    const createNewBooking = this.createNewBooking;

    // create callback function and set it to only run once
    function createNewBookingCallback() {
      createNewBooking(data);
      return {};
    }
    createNewBookingCallback.runOnce = true;

    if (this.props.currentUser) { // user is logged in

      this.createNewBooking(data);

    } else { // user is not logged in

      // add postlogin callback, go to sign-up page, show message
      addCallback('users.postlogin', createNewBookingCallback);
      this.props.router.push('/sign-up');
      this.props.flash(this.context.intl.formatMessage({id: 'users.please_sign_up_log_in'}), 'error');

    }
  }

  /*

  Trigger new booking mutation and then call this.success()

  */
  createNewBooking(data) {
    console.log('// createNewBooking')
    console.log(data)
    this.props.newMutation({document: {
      startAt: this.state.from.toDate(),
      endAt: this.state.to.toDate(),
      numberOfGuests: this.state.numberOfGuests,
      roomId: this.props.room._id
    }}).then(result => this.success(result.data.BookingsNew));
  }

  /*

  Success callback

  */
  success(booking) {
    this.props.router.push({pathname: `/booking/${booking._id}`});
    this.props.flash(this.context.intl.formatMessage({id: 'bookings.created'}), 'success');
  }

  /*

  Render

  */
  render() {

    const numberOfNights = this.state.from && this.state.to ? this.state.to.diff(this.state.from, 'days') : 0;
    const totalPrice = this.props.room.pricePerNight * this.state.numberOfGuests * numberOfNights;

    const guestsOptions = _.range(1, this.props.room.guestsNumber+1).map(value => ({
      value, 
      label: `${value} ${this.context.intl.formatMessage({id: value > 1 ? 'bookings.guests' : 'bookings.guest'})}`
    }));

    return (
    <Form onSubmit={this.submitForm} className="bookings-form">

      <div className="bookings-form-header">

        <h2 className="bookings-form-price">{getSetting('defaultCurrency', '$')}{this.props.room.pricePerNight}<span>/night</span></h2>

      </div>

      <div className="bookings-form-contents">

        <div className="bookings-form-dates">

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
              value={this.state.from}
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
              value={this.state.to}
            />
          </div>

        </div>

        <div className="bookings-form-field">
          {/*
          <label className="control-label"><FormattedMessage id="bookings.number_of_guests" /></label>
          */}
          <Select name="numberOfGuests" layout="elementOnly" onChange={this.updateGuests} options={guestsOptions}/>
        </div>

      </div>

      <div className="bookings-form-total">

        <h3 className="bookings-form-total-price">Total Price: {getSetting('defaultCurrency', '$')}{totalPrice}</h3>

      </div>

      <Button disabled={this.state.disabled} className="bookings-form-submit" type="submit" bsStyle="primary"><FormattedMessage id="bookings.book" /></Button>

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

// export default compose(
//   withNew(options),
//   withRouter,
//   withMessages,
//   withCurrentUser,
//   withUnavailableDates,
// )(BookingsNewForm)
