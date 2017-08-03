import { Components, addRoute } from 'meteor/vulcan:core';

import Home from '../components/common/Home';
import HowTo from '../components/static/HowTo';
import About from '../components/static/About';
import Privacy from '../components/static/Privacy';
import Terms from '../components/static/Terms';

import RoomsSearch from '../components/rooms/RoomsSearch';
import RoomsPage from '../components/rooms/RoomsPage';
import RoomsNewPage from '../components/rooms/RoomsNewPage';

import BookingsPage from '../components/bookings/BookingsPage';

import UsersProfile from '../components/users/UsersProfile';
import UsersAccount from '../components/users/UsersAccount';

import BookingsList from '../components/admin/BookingsList';
import RoomsList from '../components/admin/RoomsList';

addRoute([

  {name: 'home', path: '/', component: Home},
  {name: 'how-to', path: '/how-to', component: HowTo},
  {name: 'about', path: '/about', component: About},
  {name: 'privacy', path: '/privacy', component: Privacy},
  {name: 'terms', path: '/terms', component: Terms},

  {name: 'rooms.search', path: '/search', component: RoomsSearch},
  {name: 'rooms.new', path: '/room/new', component: RoomsNewPage},
  {name: 'rooms.page', path: '/room/:roomId(/:slug)', component: RoomsPage},

  {name: 'bookings.page', path: '/booking/:bookingId', component: BookingsPage},

  {name: 'users.single',   path:'users/:slug',           component: UsersProfile},
  {name: 'users.account',  path:'account',               component: UsersAccount},
  {name: 'users.edit',     path:'users/:slug/edit',      component: UsersAccount},

  {name: 'bookings.list',     path:'/admin/bookings',    component: BookingsList},
  {name: 'rooms.list',     path:'/admin/rooms',           component: RoomsList},

]);