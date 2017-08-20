# ZensRoom

This is an open-source AirBnB-type app built using [VulcanJS](http://vulcanjs.org) and developed as prototype for [Zens](http://www.zens.tokyo/), a Tokyo-based company.

## Install

1. Clone this repo
2. Follow the [VulcanJS install instructions](http://docs.vulcanjs.org/#Install).
3. Run with `npm start` (or the equivalent `meteor --settings settings.json`).

## Local Development

By default, the app will look for VulcanJS core packages (`vulcan:core`, `vulcan:email`, `vulcan:forms`, etc.) on [Atmosphere](https://atmospherejs.com/), Meteor's package server. 

For local development, it can be useful to have access to the VulcanJS codebase locally and be able to modify it if needed. You can do so by following these steps:

1. Clone the main [VulcanJS repo](https://github.com/VulcanJS/Vulcan) locally (for example, to `~/Vulcan`).
2. Inside the main repo, checkout the `devel` branch.
3. Go back to the ZensRoom directory and launch your app with:

```
METEOR_PACKAGE_DIRS="~/Vulcan/packages" meteor --port 3000 --settings settings.json
```

Note that if you'd like, you can create an alias for that command in your `.bash_profile` file:

```
alias runvulcan='METEOR_PACKAGE_DIRS="~/Vulcan/packages" meteor --port 3000 --settings settings.json'
```

## Settings

This project expects a few specific API keys, as defined in your project's `settings.json` (in addition to any other generic VulcanJS settings you might already have). Here's a sample file:

```
{
  "public": {
    "title": "Your Site Name",
    "tagline":"Your site tagline",

    "language": "en",
    "locale": "en",

    "cloudinary": {
      "cloudName": "123foo"
    },

    "stripe": {
      "publishableKeyTest": "pk_test_123foo"
    },

    "googlemaps": {
      "apiKey": "456foo"
    }
  },

  "stripe": {
    "secretKeyTest": "sk_test_123foo"
  },
  
  "defaultEmail": "hello@foo.com",
  "mailUrl": "smtp://username%40yourdomain.mailgun.org:yourpassword123@smtp.mailgun.org:587/",

  "oAuth": {
    "twitter": {
      "consumerKey": "foo",
      "secret": "bar"
    },
    "facebook": {
      "appId": "foo",
      "secret": "bar"
    }
  }
}
```

## Dependencies

The ZensRoom app depends on the following VulcanJS [packages](https://github.com/SachaG/Zensroom/blob/devel/packages/zensroom/package.js#L10-L19):

- `vulcan:core`: VulcanJS core features.
- `vulcan:forms`: [SmartForms](http://docs.vulcanjs.org/forms.html) component.
- `vulcan:forms-upload`: Image upload form component (using [Cloudinary](http://cloudinary.com)).
- `vulcan:accounts`: User accounts UI (log in/sign up/reset password/etc.).
- `vulcan:payments`: [Payments package](http://docs.vulcanjs.org/payments.html) using Stripe.
- `vulcan:admin`: [Admin](http://docs.vulcanjs.org/admin.html) dashboard.
- `vulcan:maps`: Maps component. 

Packages in the repo not mentioned above (`vulcan:posts`, `vulcan:comments`, etc.) are not currently used by this project but might be in the future. 

See also `package.json` for a list of NPM dependencies. 

## Architecture

The code for the app is available in `/packages/zensroom`, split into the following directories:

- `client`: contains the client entry point and any client-specific code.
- `server`: contains the server entry point and any server-specific code.
- `components`: contains all React components.
- `containers`: contains all React containers.
- `modules`: contains all other JavaScript modules.

## Collections (Models)

The app uses the following collections:

- `Rooms`
- `Bookings`
- `Reviews`
- `Users`
