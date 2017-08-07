/*

MongoDB indexes for geographic search

*/

import Rooms from '../modules/rooms/collection';

Rooms.rawCollection().createIndex({location: '2dsphere'});
