const projorcont = (context, actions) => ({
  collection: 'tasks',
  query: actions.feed.query().feedquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 1 },

  //TODO: use a new composer/container to remove query, limit and taskids since no query is necessary
  data: {},

  actions: actions.feed,
  context: () => context,
})

export default projorcont
