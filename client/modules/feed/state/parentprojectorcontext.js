import FeedDomain from '../actions/domain'

const parentprojectorcontext = (context, actions) => ({
  collection: 'tasks',
  query: actions.feed.query().feedquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 1 },

  //TODO: use a new composer/container to remove query, limit and taskids since no query is necessary
  data: {},
  buttonpress: FeedDomain.upprojorcont,
  buttontext: "Up one level",
  context: () => context,
})

export default parentprojectorcontext
