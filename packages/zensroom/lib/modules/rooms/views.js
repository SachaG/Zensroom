/*

Rooms views

http://docs.vulcanjs.org/terms-parameters.html#Using-Views

*/

import Rooms from './collection.js';

Rooms.addView('roomsSearch', terms => ({
  options: {
    sort: {sticky: -1, baseScore: -1}
  }
}));