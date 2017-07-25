import { PlaceControl } from 'meteor/vulcan:places';
import FormsUpload from 'meteor/vulcan:forms-upload';

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

  name: {
    label: 'Name',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
  },

  description: {
    label: 'Description',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'textarea',
  },

  rules: {
    label: 'House Rules',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: 'textarea',
  },

  bedsNumber: {
    label: 'Number of Beds',
    type: Number,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
  },

  guestsNumber: {
    label: 'Number of Guests',
    type: Number,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
  },

  photos: {
    label: 'Photos',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: FormsUpload, // use the FormsUpload form component
    form: {
      options: {
        preset: 'zensroom'
      },
    }
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
      options: [
        { value: 'washing-machine', label: 'Washing Machine' },
        { value: 'pocket-wifi', label: 'Pocket Wifi' },
        { value: 'internet', label: 'Internet' },
      ]
    }
  },

  'amenities.$': {
    type: String,
    optional: true,
  },

  placeName: {
    type: String,
    control: PlaceControl,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
  },

  placeId: {
    type: String,
    hidden: true,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
  }

};

export default schema;