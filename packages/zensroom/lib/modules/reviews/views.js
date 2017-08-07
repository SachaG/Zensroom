/*

Reviews views

http://docs.vulcanjs.org/terms-parameters.html#Using-Views

*/

import Reviews from './collection.js';

Reviews.addView('roomReviews', terms => ({
  selector: {
    roomId: terms.roomId
  }
}));