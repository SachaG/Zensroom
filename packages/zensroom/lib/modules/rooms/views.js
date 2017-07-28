import Rooms from './collection.js';

Rooms.addView('roomsSearch', terms => ({
  options: {
    sort: {sticky: -1, baseScore: -1}
  }
}));