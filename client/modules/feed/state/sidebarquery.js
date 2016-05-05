const sidebarquery = (context, actions) => ({
  collection: 'tasks',
  query: actions.feed.query().projectsquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 10000 },

  actions: actions.feed,
  context: () => context,
})

export default sidebarquery
