/*

Single booking page, wrapped with withDocument

http://docs.vulcanjs.org/data-loading.html#Single-Resolver

*/

import React from 'react';
import { Components, registerComponent, withCurrentUser, withDocument, withEdit, withRemove } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import Button from 'react-bootstrap/lib/Button';
import gql from 'graphql-tag';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import Bookings from '../../modules/bookings/collection';
import { BookingRoom } from '../admin/BookingsDashboard';

class BookingCompleted extends React.Component {

  constructor(props) {
    super(props);
  }

  confirmBooking() {
    console.log(this.props)
    this.props.editMutation({
      documentId: this.props.document._id,
      set: { confirmed: true },
    })
    .then((results) => {
      console.log(results)
      this.props.router.push({pathname: `/booking/${document._id}`});
      this.props.flash(this.context.intl.formatMessage({id: 'bookings.created'}), 'success');
      return true;
    })
    .catch((error) => console.log(error));
  }

  render () {
    console.log(this.props)
    const { document, loading, currentUser } = this.props;

    return (
      <div>
        {loading ? 'Loading…' :

          <div>

            <h2 className="page-title">{document.room.name}</h2>

            <div className="bookings-checkout">

            </div>

            <Components.Card
              fields={[
                'startAt',
                'endAt',
                'numberOfGuests',
                'paidAt',
              ]}
              collection={Bookings}
              document={document}
              currentUser={currentUser} />

            <BookingRoom document={document} />

            <Button className="bookings-form-submit" type="submit" bsStyle="primary" onClick={this.confirmBooking.bind(this)}>Confirm</Button>
            <Button type="submit" bsStyle="default" onClick={this.confirmBooking.bind(this)}>Cancel</Button>

          </div>

        }

      </div>
    )
  }
}

BookingCompleted.displayName = 'BookingCompleted';

const options = {
  collection: Bookings,
  fragmentName: 'BookingsItemFragment'
};

const mapPropsFunction = props => ({...props, documentId: props.routeParams && props.routeParams.bookingId});

registerComponent(
  'BookingCompleted',
  BookingCompleted,
  mapProps(mapPropsFunction),
  [withDocument, options],
  [withEdit, options],
  [withRemove, options],
  withCurrentUser
);

export default compose(
  mapProps(mapPropsFunction),
  withDocument(options),
  withEdit(options),
  withRemove(options),
  withCurrentUser
)(BookingCompleted);
