Package.describe({
  name: 'zensroom',
});

Package.onUse((api) => {
  api.use([

    // vulcan core
    'vulcan:core',

    // vulcan packages
    'vulcan:forms',
    'vulcan:forms-upload',
    'vulcan:accounts',
    'vulcan:places',
    
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});