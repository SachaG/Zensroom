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
    
  ]);

  api.addFiles(['lib/stylesheets/main.scss'], ['client']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});