import { Components, addRoute } from 'meteor/vulcan:core';

addRoute({
  name: 'home',
  path: '/',
  componentName: 'PropertiesList'
});