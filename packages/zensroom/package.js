Package.describe({
  name: 'zensroom',
});

Package.onUse((api) => {
  api.use([

    'fourseven:scss@4.5.0',

    // vulcan core
    'vulcan:core',

    // vulcan packages
    'vulcan:forms',
    'vulcan:forms-upload',
    'vulcan:accounts',
    'vulcan:payments',
    'vulcan:maps',
    'vulcan:admin',
    
  ]);

  api.addFiles(['lib/stylesheets/main.scss'], ['client']);

  api.addAssets([
    'lib/server/emails/common/test.handlebars',
    'lib/server/emails/common/wrapper.handlebars',
    'lib/server/emails/rooms/roomsNew.handlebars',
    'lib/server/emails/bookings/bookingsNew.handlebars',
  ], ['server']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});