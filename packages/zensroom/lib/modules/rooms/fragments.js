/*

Rooms fragments

http://docs.vulcanjs.org/fragments.html

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment RoomsItemFragment on Rooms {
    _id
    createdAt
    name
    bedsNumber
    guestsNumber
    amenities
    photos
  }
`);
