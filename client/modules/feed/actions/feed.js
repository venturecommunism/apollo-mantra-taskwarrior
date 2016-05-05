export default {
  query() {
    // get the URL contents
    var queryParams = FlowRouter.current().queryParams
    //sweetAlert("queryParams", queryParams)
    //sweetAlert("queryParams.projects", queryParams.projects)

    var query = {}
    query.feedquery = {}
    query.projectsquery = {}
    query.filtprojquery = {}

    switch (JSON.stringify(queryParams)) {
      case "{}":
        //sweetAlert("case", "{}")
        query.feedquery = { type: {$nin: ['project', 'context']}, "workflow.status": 'inbox'}
        query.projectsquery = { type : 'project', super: {$exists: 0} }
        query.filtprojquery = { type : 'project', super: {$exists: 0}}
        break
      default:
        query.feedquery = { type: {$nin: ['project', 'context']}}
        query.projectsquery = { type: 'project', super: { $exists: 0} }
        query.filtprojquery = { type: 'project' }
    }

    switch (queryParams.projects) {
      case (null || ''):
        break
      default:
        var project = queryParams.projects
        query.feedquery = { project: project }
        //sweetAlert("project", project)
        query.filtprojquery = { type: 'project', super: project}
    }

    switch (queryParams.type) {
      case (null || ''):
        break
      default:
        var type = queryParams.type
        //sweetAlert("type", type)
        query.feedquery.type = { $in: [type] }
    }

    switch (Boolean(queryParams.projects && queryParams.type)) {
      case (false):
        break
      default:
        var project = queryParams.projects
        var type = queryParams.type
        query.feedquery = { $or: [ { super: project }, { project: project} ] }
        query.projectsquery = { type: type, super: project }
        query.filtprojquery._id = {$ne: project}
    }

    switch (Boolean(!queryParams.projects && queryParams.type)) {
      case (false):
        break
      default:
        query.feedquery.super = { $exists: 0 }
    }

    switch(queryParams.mode) {
      case ('do'):
        query.feedquery["workflow.status"] = {$nin: ['project', 'inbox'] }
        break
      default:
        query.feedquery["workflow.status"] = {$in: ['project', 'inbox'] }
    }

    //sweetAlert("query.feedquery.project", query.feedquery.project)
    return query
  },
  selectedProject({ context }, e) {
    var id = e.target.id
    FlowRouter.setQueryParams({ projects: id, type: 'project' })
  },
  overduequery({ Meteor }) {
    // Session.set('now', formattedNow())
    var now = '123'
    var query = { due: {$lt: now} }
    return query
  },
  calendarquery({ Meteor }) {
    // Session.set('now', formattedNow())
    var now = '123'
    var query = { due: {$gte: now} }
    return query
  },
  assignProject({ context }, e) {
    var id = e.target.parentNode.id
    var queryParams = FlowRouter.current().queryParams
    switch (queryParams.type) {
      case 'project':
        var data = {super: e.target.id, workflow: {status: "project", workflow: ["project"]}}
        break
      default:
        var data = {project: e.target.id, workflow: {status: "project", workflow: ["project"]}}
    }
    Meteor.call('tasks.update', data, id)
  },
  filterAllProjects() {
    var currentState = FlowRouter.getQueryParam('type')
    if (currentState != 'project') {
      FlowRouter.setQueryParams({ type: 'project' })
    } else {
      FlowRouter.setQueryParams({ type: null })
    }
  },
  filterAllContexts() {
    var currentState = FlowRouter.getQueryParam('type')
    if (currentState != 'context') {
      FlowRouter.setQueryParams({ type: 'context' })
    } else {
      FlowRouter.setQueryParams({ type: null })
    }
  },
  filterDefineSomeWork() {
    var currentState = FlowRouter.getQueryParam('mode')
    if (currentState) {
      FlowRouter.setQueryParams({ mode: null })
    }
  },
  filterDoDefinedWork() {
    var currentState = FlowRouter.getQueryParam('mode')
    if (!currentState) {
      FlowRouter.setQueryParams({ mode: 'do' })
    }
  },
  setProjectOrContext({ context }, e) {
    const _id = e.target.className
    sweetAlert("projorcont", _id)
    const projorcont = e.target.value
    const data = {type: projorcont}
    Meteor.call('tasks.update', data, _id)
    // {_id: _id}, {$set: {type: projorcont}})
  },
  paramsflags() {
    var queryParams = FlowRouter.current().queryParams
    var paramsflags = {}
    paramsflags.context = (queryParams.type == 'context') ? 'blueflag' : null
    paramsflags.project = (queryParams.type == 'project') ? 'blueflag' : null
    paramsflags.definesome = (queryParams.mode == null) ? 'redflag' : null
    paramsflags.dodefined = (queryParams.mode == 'do') ? 'greenflag' : null
    paramsflags.clearall = (JSON.stringify(queryParams) == '{}' ) ? 'blueflag' : null
    return paramsflags
  },
  clearFilters() {
    FlowRouter.go('/feed')
  },
  settle({ context }, e) {
    sweetAlert("e", e)
    const id = e.target.parentNode.parentNode.parentNode.parentNode.id
    const data = {"workflow.status": "context", "workflow.workflow": ["project", "context"]}
    Meteor.call('tasks.update', data, id)
  },
  create({Meteor, LocalState, FlowRouter}, description) {
    if (!description) {
      return LocalState.set('SAVING_ERROR', 'Description required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const _id = Meteor.uuid();
    const data = {}
    data.workflow = {status: "inbox"}
    data.description = description
    data.uuid = guid()
    data.created = new Date();
    var date = moment(data.created)
    data.entry = formattedMoment(date)
    data.status = 'pending'
    //sweetAlert("username", Object.keys(Meteor.user().emails[0]))
    //sweetAlert("username", Meteor.user().emails[0].address)
    data.username = Meteor.user() ? Meteor.user().emails[0].address : 'Anonymous'
    //sweetAlert("data", data)

    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('tasks.create', data, _id, (err) => {
      if (err) {
        sweetAlert("Oops...", err.message, "error")
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    // FlowRouter.go(`/task/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },
}

