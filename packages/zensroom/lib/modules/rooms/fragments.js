/*

Rooms fragments

http://docs.vulcanjs.org/fragments.html

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment RoomsItemFragment on Room {
    _id
    createdAt
    name
    bedsNumber
    guestsNumber
    amenities
  }
`);