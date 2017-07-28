import { Components, addRoute } from 'meteor/vulcan:core';

import Home from '../components/common/Home';
import HowTo from '../components/static/HowTo';
import About from '../components/static/About';
import Privacy from '../components/static/Privacy';
import Terms from '../components/static/Terms';

import RoomsSearchResults from '../components/rooms/RoomsSearchResults';
import RoomsPage from '../components/rooms/RoomsPage';

import BookingsPage from '../components/bookings/BookingsPage';

import UsersProfile from '../components/users/UsersProfile';
import UsersAccount from '../components/users/UsersAccount';

addRoute([

  {name: 'home', path: '/', component: Home},
  {name: 'how-to', path: '/how-to', component: HowTo},
  {name: 'about', path: '/about', component: About},
  {name: 'privacy', path: '/privacy', component: Privacy},
  {name: 'terms', path: '/terms', component: Terms},

  {name: 'roomsSearch', path: '/search', component: RoomsSearchResults},
  {name: 'roomsPage', path: '/room/:roomId(/:slug)', component: RoomsPage},

  {name: 'bookingsPage', path: '/booking/:bookingId', component: BookingsPage},

  {name: 'users.single',   path:'users/:slug',           component: UsersProfile},
  {name: 'users.account',  path:'account',               component: UsersAccount},
  {name: 'users.edit',     path:'users/:slug/edit',      component: UsersAccount},

]);