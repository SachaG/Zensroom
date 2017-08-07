/*

Products

http://docs.vulcanjs.org/payments.html

*/

import { addProduct } from 'meteor/vulcan:payments';
import moment from 'moment';
import Rooms from './rooms/collection';

addProduct('booking', booking => {

  const numberOfNights = moment(booking.endAt).diff(moment(booking.startAt), 'days');
  const room = booking.room || Rooms.findOne({_id: booking.roomId});
  const amount = room.pricePerNight * booking.numberOfGuests * numberOfNights * 100;

  return {
    name: 'Book this room',
    amount,
    currency: 'USD',
    description: `Book ${room.name}`,
  }
});