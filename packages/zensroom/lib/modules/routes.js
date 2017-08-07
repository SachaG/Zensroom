/*

Routes

http://docs.vulcanjs.org/routing.html

*/

import { Components, addRoute } from 'meteor/vulcan:core';

// import Home from '../components/common/Home';
// import HowTo from '../components/static/HowTo';
// import About from '../components/static/About';
// import Privacy from '../components/static/Privacy';
// import Terms from '../components/static/Terms';

// import RoomsSearch from '../components/rooms/RoomsSearch';
// import RoomsPage from '../components/rooms/RoomsPage';
// import RoomsNewPage from '../components/rooms/RoomsNewPage';

// import BookingsPage from '../components/bookings/BookingsPage';

// import UsersProfile from '../components/users/UsersProfile';
// import UsersAccount from '../components/users/UsersAccount';

// import BookingsList from '../components/admin/BookingsList';
// import RoomsList from '../components/admin/RoomsList';

addRoute([

  {name: 'home',                  path: '/',                        componentName: 'Home'},
  {name: 'how-to',                path: '/how-to',                  componentName: 'HowTo'},
  {name: 'about',                 path: '/about',                   componentName: 'About'},
  {name: 'privacy',               path: '/privacy',                 componentName: 'Privacy'},
  {name: 'terms',                 path: '/terms',                   componentName: 'Terms'},
          
  {name: 'rooms.search',          path: '/search',                  componentName: 'RoomsSearch'},
  {name: 'rooms.new',             path: '/room/new',                componentName: 'RoomsNewPage'},
  {name: 'rooms.page',            path: '/room/:roomId(/:slug)',    componentName: 'RoomsPage'},
          
  {name: 'bookings.page',         path: '/booking/:bookingId',      componentName: 'BookingsPage'},
          
  {name: 'users.single',          path:'users/:slug',               componentName: 'UsersProfile'},
  {name: 'users.account',         path:'account',                   componentName: 'UsersAccount'},
  {name: 'users.edit',            path:'users/:slug/edit',          componentName: 'UsersAccount'},
    
  {name: 'bookings.dashboard',    path:'/admin/bookings',           componentName: 'BookingsDashboard'},
  {name: 'rooms.dashboard',       path:'/admin/rooms',              componentName: 'RoomsDashboard'},
  {name: 'reviews.dashboard',     path:'/admin/rooms',              componentName: 'ReviewsDashboard'},
  
]);