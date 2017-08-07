/*

Bookings views

http://docs.vulcanjs.org/terms-parameters.html#Using-Views

*/

import Bookings from './collection.js';

Bookings.addView('userBookings', terms => ({
  selector: {
    userId: terms.userId,
    roomId: terms.roomId,
    paidAt: {$exists: true}
  }
}));