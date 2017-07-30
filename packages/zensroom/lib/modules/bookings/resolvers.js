import { addGraphQLResolvers, addGraphQLQuery } from 'meteor/vulcan:core';
import moment from 'moment';

const unavailableDatesResolver = {
  Query: {
    UnavailableDates (root, { roomId }, { Rooms, Bookings, currentUser }) {
      const bookings = Bookings.find({ roomId, paidAt: {$exists: true} }).fetch();
      let dates = [];
      bookings.forEach(booking => {
        const mStart = moment(booking.startAt);
        const mEnd = moment(booking.endAt);
        const duration = moment.duration(mEnd.diff(mStart)).as('days');
        for(i = 0; i <= duration; i++) {
          dates.push(mStart.add(1, 'days').toDate())
        }
      });
      return dates;
    }
  }
};
addGraphQLResolvers(unavailableDatesResolver);

addGraphQLQuery(`UnavailableDates(roomId: String): [Date]`);
