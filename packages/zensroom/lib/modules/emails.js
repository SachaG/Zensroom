import VulcanEmail from 'meteor/vulcan:email';

VulcanEmail.addEmails({

  test: {
    template: "test",
    path: "/email/test",
    data() {
      return {date: new Date()};
    },
    subject() {
      return "This is a test";
    },
  },

  roomsNew: {
    template: 'roomsNew',
    path: '/email/roomsNew',
    subject(data) {
      const room = _.isEmpty(data) ? {name: '[name]'} : data.RoomsSingle;
      return `A new room has been created: ${room.name}`;
    },
    query: `
      query OneRoom($documentId: String){
        RoomsSingle(documentId: $documentId){
          name
          description
          user{
            _id
            displayName
          }
        }
      }
    `,
    testVariables: {}
  },

  bookingsNew: {
    template: 'bookingsNew',
    path: '/email/bookingsNew',
    subject(data) {
      const booking = _.isEmpty(data) ? {room: {name: '[name]'}} : data.BookingsSingle;
      return `A booking has been created for room: ${booking.room.name}`;
    },
    query: `
      query OneBooking($documentId: String){
        BookingsSingle(documentId: $documentId){
          _id
          pageUrl
          startAtFormatted
          endAtFormatted
          numberOfGuests
          user{
            _id
            displayName
            pageUrl
          }
          room{
            _id
            name
            description
            pageUrl
          }
        }
      }
    `,
    testVariables: {}
  },

  bookingsCompleted: {
    template: 'bookingsCompleted',
    path: '/email/bookingsCompleted',
    subject(data) {
      const booking = _.isEmpty(data) ? {room: {name: '[name]'}} : data.BookingsSingle;
      return `A booking has been completed for room: ${booking.room.name}`;
    },
    query: `
      query OneBooking($documentId: String){
        BookingsSingle(documentId: $documentId){
          _id
          pageUrl
          startAtFormatted
          endAtFormatted
          numberOfGuests
          user{
            _id
            displayName
            pageUrl
          }
          room{
            _id
            name
            description
            pageUrl
          }
        }
      }
    `,
    testVariables: {}
  }
});
