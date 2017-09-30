import VulcanEmail from 'meteor/vulcan:email';

VulcanEmail.addTemplates({
  test:                     Assets.getText("lib/server/emails/common/test.handlebars"),
  wrapper:                  Assets.getText("lib/server/emails/common/wrapper.handlebars"),
  roomsNew:                 Assets.getText("lib/server/emails/rooms/roomsNew.handlebars"),
  bookingsNew:              Assets.getText("lib/server/emails/bookings/bookingsNew.handlebars"),
  bookingsCompleted:        Assets.getText("lib/server/emails/bookings/bookingsCompleted.handlebars"),
});
