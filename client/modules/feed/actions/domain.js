import { tasks } from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'

const FeedDomain = {
  // these are pulling from the Minimongo cache, only the subscription can
  // fetch data from the server

  upprojorcont() {
    var queryParams = FlowRouter.current().queryParams
    var id = queryParams.projects
    var superprojorcont = tasks.findOne({ super: {$exists: 1}, _id: id})
    var superid = superprojorcont ? superprojorcont.super : null
    FlowRouter.setQueryParams({ projects: superid })
    //sweetAlert("super", superid)
  },

  // the component that uses this just needs actions mapped to it via container in order to use a Mantra action
  setProjectOrContext(e) {
    const _id = e.target.className
    //sweetAlert("projorcont", "success")
    const projorcont = e.target.value
    const data = {type: projorcont} 
    Meteor.call('tasks.update', data, _id)
    // {_id: _id}, {$set: {type: projorcont}})
  },

};

export default FeedDomain
