import { addCallback } from 'meteor/vulcan:core';
import moment from 'moment';

// Add "after" and "before" properties to terms which can be used to limit posts in time.
function addDatesParameter (parameters, terms, apolloClient) {

  if (terms.from) {

    const mFrom = moment(terms.from, "YYYY-MM-DD").startOf('day');

    if (Meteor.isServer) {
      
    }

  }

  if (terms.to) {

    const mTo = moment(terms.to, "YYYY-MM-DD").endOf('day');

    if (Meteor.isServer) {
      
    }

  }

  // get all bookings in between those dates

  // exclude all rooms that are already booked  
  return parameters;
}
addCallback('rooms.parameters', addDatesParameter);
