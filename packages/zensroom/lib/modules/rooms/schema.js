/*

Rooms schema

http://docs.vulcanjs.org/schemas.html#Schemas

*/

import FormsUpload from 'meteor/vulcan:forms-upload';
import { amenities, spaces } from '../data';
import { Utils } from 'meteor/vulcan:core';

const formGroups = {
  infos: {
    name: 'infos',
    label: 'Infos',
    order: 10,
  },
  photos: {
    name: 'photos',
    label: 'Photos',
    order: 20,
    startCollapsed: true
  },
  amenities: {
    name: 'amenities',
    label: 'Amenities',
    order: 30,
    startCollapsed: true
  },
  address: {
    name: 'address',
    label: 'Address',
    order: 40,
    startCollapsed: true
  },
  price: {
    name: 'price',
    label: 'Price',
    order: 50,
    startCollapsed: true
  }
};

const schema = {
  
  // default properties

  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },

  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: (document, currentUser) => {
      return new Date();
    }
  },

  userId: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      resolver: (movie, args, context) => {
        return context.Users.findOne({ _id: movie.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
      },
      addOriginalField: true
    }  
  },

  // custom properties

  roomType: {
    label: 'Room Type',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'select',
    form: {
      options: [
        {label: 'Entire Place', value: 'place'},
        {label: 'Private Room', value: 'private'},
        {label: 'Shared Room', value: 'shared'},
      ]
    },
    group: formGroups.info
  },

  propertyType: {
    label: 'Type',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'select',
    form: {
      options: [
        {label: 'Apartment', value: 'apartment'},
        {label: 'House', value: 'house'},
        {label: 'Other', value: 'other'},
      ]
    },
    group: formGroups.info
  },

  name: {
    label: 'Name',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.info,
    searchable: true,
    limit: 90,
    max: 90
  },

  description: {
    label: 'Description',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'textarea',
    group: formGroups.info,
    searchable: true,
    limit: 300,
    max: 300
  },

  rules: {
    label: 'House Rules',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'textarea',
    group: formGroups.info
  },

  bedsNumber: {
    label: 'Number of Beds',
    type: Number,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.info,
    control: 'number'
  },

  guestsNumber: {
    label: 'Number of Guests',
    type: Number,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.info,
    control: 'number'
  },

  photos: {
    label: 'Photos',
    type: Array,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: FormsUpload, // use the FormsUpload form component
    form: {
      options: {
        preset: 'zensroom'
      },
    },
    group: formGroups.photos
  },

  'photos.$': {
    type: Object,
    blackbox: true,
    optional: true,
  },

  amenities: {
    label: 'Amenities',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'checkboxgroup',
    form: {
      options: amenities
    },
    group: formGroups.amenities
  },

  'amenities.$': {
    type: String,
    optional: true,
  },

  spaces: {
    label: 'Spaces',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'checkboxgroup',
    form: {
      options: spaces
    },
    group: formGroups.amenities
  },

  'spaces.$': {
    type: String,
    optional: true,
  },

  country: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.address
  },

  zipCode: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.address
  },

  state: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.address
  },

  city: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.address
  },

  address: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.address
  },

  address2: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.address
  },

  geoData: {
    type: Object,
    blackbox: true,
    optional: true,
  },

  location: {
    type: Object,
    blackbox: true,
    optional: true,
    viewableBy: ['guests']
  },

  pricePerNight: {
    type: Number,
    optional: false,
    label: 'Price per night',
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    group: formGroups.price,
    control: 'number'
  },

  // GraphQL-only fields

  pageUrl: {
    type: String,
    optional: true,
    resolveAs: {
      type: 'String',
      resolver: (room, args, context) => {
        return `${Utils.getSiteUrl()}room/${room._id}`;
      },
    }  
  }

};

export default schema;