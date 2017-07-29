import Reviews from './collection.js';

Reviews.addView('roomReviews', terms => ({
  selector: {
    roomId: terms.roomId
  }
}));