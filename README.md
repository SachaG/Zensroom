# ZensRoom

This is an open-source AirBnB-type app built using [VulcanJS](http://vulcanjs.org) and developed as prototype for [Zens](http://www.zens.tokyo/), a Tokyo-based company.

## Install

1. Clone this repo
2. Follow the [VulcanJS install instructions](http://docs.vulcanjs.org/#Install).
3. Run with `npm start` (or the equivalent `meteor --settings settings.json`).

## Settings

This project expects a few specific API keys, as defined in your project's `settings.json` (in addition to any other generic VulcanJS settings you might already have):

```
{

  "public": {

    "cloudinary": {
      "cloudName": "123foo"
    },
    
    "googlemaps": {
      "apiKey": "123foo"
    },

    "stripe": {
      "publishableKeyTest": "123foo"
    },
  },

  "stripe": {
    "secretKeyTest": "123foo"
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
