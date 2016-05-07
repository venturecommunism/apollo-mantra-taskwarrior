if (Meteor.isClient) {
  Meteor.startup(function() {
    Session.set('now', formattedNow())

    Meteor.setInterval(function() {
      Session.set('now', formattedNow())
    }, 500)
  })
}
