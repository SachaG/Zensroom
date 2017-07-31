import googleMaps from '@google/maps';
import { getSetting } from 'meteor/vulcan:core';
import Promise from 'bluebird';

const googleMapsSetting = getSetting('googlemaps');

if (!googleMapsSetting) {
  throw new Error('Please fill in your Google Maps API Key or disable the Maps package.');
}

const googleMapsClient = googleMaps.createClient({
  key: googleMapsSetting.apiKey
});

/*

Note: Google Maps Node package doesn't support promises natively.
See https://github.com/google/google-api-nodejs-client/issues/197#issuecomment-299569914

*/
export async function geocode(address) {
  const data = await Promise.fromCallback((cb) => googleMapsClient.geocode({ address }, cb));
  return data.json.results[0];
}