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
    status: 1
  }
}));

Bookings.addView('userBookingsPast', terms => ({
  selector: {
    userId: terms.userId,
    endAt: {$lt: new Date()}
  }
}));

Bookings.addView('userBookingsCurrent', terms => ({
  selector: {
    userId: terms.userId,
    startAt: {$lt: new Date()},
    endAt: {$gt: new Date()}
  }
}));

Bookings.addView('userBookingsFuture', terms => ({
  selector: {
    userId: terms.userId,
    startAt: {$gt: new Date()}
  }
}));
