import { Components, addRoute } from 'meteor/vulcan:core';
import RoomsList from '../components/rooms/RoomsList';

addRoute({
  name: 'home',
  path: '/',
  component: RoomsList
});