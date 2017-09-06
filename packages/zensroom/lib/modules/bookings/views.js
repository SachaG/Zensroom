/*

Bookings views

http://docs.vulcanjs.org/terms-parameters.html#Using-Views

*/

import Bookings from './collection.js';
import moment from 'moment';

Bookings.addView('userBookings', terms => ({
  selector: {
    userId: terms.userId,
    roomId: terms.roomId,
    paidAt: {$exists: true}
  }
}));

Bookings.addView('userPendingBookings', terms => ({
  selector: {
    userId: terms.userId,
    bookingId: terms.bookingId,
    status: 1
  }
}));

Bookings.addView('userBookingsPast', terms => {
  return {
    selector: {
      userId: terms.userId,
      endAt: terms.endAt
    }
  }
});
