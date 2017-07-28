import { addGraphQLResolvers, addGraphQLQuery } from 'meteor/vulcan:core';
import moment from 'moment';

const roomsSearchResolver = {
  Query: {
    RoomsSearch(root, { terms }, { Rooms, Bookings, currentUser }) {

      const mFrom = moment(terms.from, "YYYY-MM-DD").startOf('day');
      const mTo = moment(terms.to, "YYYY-MM-DD").endOf('day');

      /*
      Find all bookings during that period that:
      - End between "from" and "to"
      - Start between "from" and "to"
      */
      const currentBookings = Bookings.find({$or: [
        {$and: [ {startAt: {"$gt": mFrom.toDate()}}, {startAt: {"$lt": mTo.toDate()}} ]},
        {$and: [ {endAt: {"$gt": mFrom.toDate()}}, {endAt: {"$lt": mTo.toDate()}} ]},
      ]}).fetch();
      const bookingsRoomIds = _.unique(_.pluck(currentBookings, 'roomId'));
      const availableRooms = Rooms.find({_id: {$nin: bookingsRoomIds}}).fetch();

      console.log('// RoomsSearch')
      console.log(terms)
      console.log(currentBookings)
      console.log(availableRooms)

      return availableRooms
    }
  }
};
addGraphQLResolvers(roomsSearchResolver);

addGraphQLQuery(`RoomsSearch(terms: JSON): [Room]`);
