import { tasks } from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

export default function () {
  Meteor.methods({
    'tasks.create'(data, _id) {
      check(data, {
        workflow: Object,
        description: String,
        uuid: String,
        created: Date,
        entry: String,
        status: String,
        username: String,
      })
      check(_id, String)

      // console.log('_tasks.add data', data)

      // XXX: Do some user authorization

      data._id = _id

      tasks.insert(data)
    },
    'tasks.update'(data, _id) {
      check(data, {
        description: Match.Optional(String),
        type: Match.Optional(String),
        project: Match.Optional(String),
        context: Match.Optional(String),
        workflow: Match.Optional(Object),
        super: Match.Optional(String),
        "workflow.status": Match.Optional(String),
        "workflow.workflow": Match.Optional(Array),
      })
      check(_id, String)

      // console.log ('tasks.update _id', _id)
      // console.log ('tasks.update data', data)

      // XXX: Do some user authorization

      let record = tasks.findOne(_id)
      const allowedFields = [ 'description','type', 'workflow', 'project', 'context', 'super', 'workflow.status', 'workflow.workflow' ]
      allowedFields.forEach(key => record.set(key,data[key]) )
      record.save(allowedFields)

      // console.log ('tasks.update record', record)

    },
    '_tasks.delete'(_id) {
      check(_id, String)
      //  console.log('_tasks.delete _id', _id)
      let record = _tasks.findOne(_id)
      record.remove()
    }
  })
}
