const projectselector = (context, actions) => ({
  collection: 'tasks',

  project: FlowRouter.current().queryParams.projects,

  query: { _id: FlowRouter.current().queryParams.projects },
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 1 },

  buttonpress: actions.feed.settle,
  context: () => context,
})

export default projectselector
