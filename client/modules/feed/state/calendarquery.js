const calendarquery = (context, actions) => ({
  connection: null,
  collection: 'taskspending',
  query: actions.feed.calendarquery(),
  pubsort: {due: -1},
  subsort: {due: 1},
  limit: { taskspending: 100000 },

  context: () => context,
})

export default calendarquery
