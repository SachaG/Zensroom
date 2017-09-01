/*

Single booking page, wrapped with withDocument

http://docs.vulcanjs.org/data-loading.html#Single-Resolver

*/

import React from 'react';
import { Components, registerComponent, withCurrentUser, withDocument, withEdit, withRemove } from 'meteor/vulcan:core';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import moment from 'moment';

import Bookings from '../../modules/bookings/collection';

class BookingCompleted extends React.Component {

  constructor(props) {
    super(props);
  }

  confirmBooking() {
    console.log(this.props.editMutation)
    this.props.editMutation({
      documentId: this.props.documentId,
      set: { paidAt:  moment()},
    })
    .then((results) => {
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

            <h3 className="page-title">{document.room.name}</h3>

            <div className="bookings-checkout">

            </div>

            <Components.Card
              fields={[
                'startAt',
                'endAt',
                'numberOfGuests',
              ]}
              collection={Bookings}
              document={document}
              currentUser={currentUser} />

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
