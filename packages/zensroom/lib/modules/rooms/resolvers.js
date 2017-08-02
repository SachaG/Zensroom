import { addGraphQLResolvers, addGraphQLQuery } from 'meteor/vulcan:core';
import moment from 'moment';

const roomsSearchResolver = {
  Query: {
    RoomsSearch(root, { terms }, { Rooms, Bookings, currentUser }) {

      console.log('// RoomsSearch')
      console.log(terms)

      const selector = {};

      if (terms.from || terms.to) {

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

        selector._id = {$nin: bookingsRoomIds};
      }

      // query based on center point
      
      // if (terms.lng && terms.lat) {
      //   selector.location = {
      //     $near: {
      //       $geometry: {
      //         type: 'Point' ,
      //         coordinates: [ parseFloat(terms.lng) , parseFloat(terms.lat) ]
      //       },
      //       $maxDistance: 1000,
      //     }
      //   }
      // }

      // query based on bounds

      if (terms.sw && terms.ne) {
        selector.location = {
          $geoWithin: {
            $box: [
              [terms.sw.lng, terms.sw.lat],
              [terms.ne.lng, terms.ne.lat]
            ]
          }
        }
      }

      // filter

      if (terms.filters) {
        const filters = Array.isArray(terms.filters) ? terms.filters : [terms.filters];
        selector.amenities = { $all: filters };
      }

      const availableRooms = Rooms.find(selector).fetch();

      console.log(JSON.stringify(selector))
      console.log(availableRooms.length)

      return availableRooms
    }
  }
};
addGraphQLResolvers(roomsSearchResolver);

addGraphQLQuery(`RoomsSearch(terms: JSON): [Room]`);
