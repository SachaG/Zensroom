import { Components, addRoute } from 'meteor/vulcan:core';

import Home from '../components/common/Home';
import HowTo from '../components/static/HowTo';
import About from '../components/static/About';
import Privacy from '../components/static/Privacy';
import Terms from '../components/static/Terms';

import RoomsSearch from '../components/rooms/RoomsList';
import RoomsPage from '../components/rooms/RoomsPage';

import BookingsPage from '../components/bookings/BookingsPage';

addRoute({name: 'home', path: '/', component: Home});
addRoute({name: 'how-to', path: '/how-to', component: HowTo});
addRoute({name: 'about', path: '/about', component: About});
addRoute({name: 'privacy', path: '/privacy', component: Privacy});
addRoute({name: 'terms', path: '/terms', component: Terms});

addRoute({name: 'roomsSearch', path: '/search', component: RoomsSearch});
addRoute({name: 'roomsPage', path: '/room/:roomId(/:slug)', component: RoomsPage});

addRoute({name: 'bookingsPage', path: '/booking/:bookingId', component: BookingsPage});
