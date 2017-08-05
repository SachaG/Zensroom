import { addCallback } from 'meteor/vulcan:core';
import moment from 'moment';

function addFromToParameters (parameters, terms, apolloClient, context) {

  if (terms.from || terms.to) {

    const mFrom = moment(terms.from, "YYYY-MM-DD").startOf('day');
    const mTo = moment(terms.to, "YYYY-MM-DD").endOf('day');

    /*
    Find all bookings during that period that:
    - End between "from" and "to"
    - Start between "from" and "to"
    */
    const currentBookings = context.Bookings.find({$or: [
      {$and: [ {startAt: {"$gt": mFrom.toDate()}}, {startAt: {"$lt": mTo.toDate()}} ]},
      {$and: [ {endAt: {"$gt": mFrom.toDate()}}, {endAt: {"$lt": mTo.toDate()}} ]},
    ]}).fetch();
    const bookingsRoomIds = _.unique(_.pluck(currentBookings, 'roomId'));

    parameters.selector._id = {$nin: bookingsRoomIds};
  }

  return parameters;
}
addCallback('rooms.parameters', addFromToParameters);

function addFiltersParameter (parameters, terms, apolloClient) {

  if (terms.filters) {
    const filters = Array.isArray(terms.filters) ? terms.filters : [terms.filters];
    parameters.selector.amenities = { $all: filters };
  }

  return parameters;
}
addCallback('rooms.parameters', addFiltersParameter);

function addSwNeParameters (parameters, terms, apolloClient) {

  if (terms.sw && terms.ne) {
    parameters.selector.location = {
      $geoWithin: {
        $box: [
          [terms.sw.lng, terms.sw.lat],
          [terms.ne.lng, terms.ne.lat]
        ]
      }
    }
  }

  return parameters;
}
addCallback('rooms.parameters', addSwNeParameters);
