const feedquery = (context, actions) => ({
  connection: null,
  collection: 'tasks',
  query: actions.feed.query().feedquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 10000 },

  context: () => context,
})

export default feedquery
