import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

const collectionComposer = ({context, connection = null, collection, query, pubsort, subsort, limit, testmode = false}, onData) => {
  const { Meteor, Collections } = context()

  const fields = {
    tasks: {
      _id: true,
      description: true,
      uuid: true,
      status: true,
      entry: true,
      likecount: true,
      taskcommentcount: true,
      username: true,
      created: true,
      owner: true,
      type: true,
      workflow: true,
      project: true,
      super: true,
      due: true,
    },
  }

  if (Meteor.subscribe('feed', fields, query, pubsort, limit).ready()) {
    const data = Mongo.Collection.get(collection, { connection: connection }).find(query, {sort: subsort}).fetch()

    //console.log('Connection', connection)
    //console.log('Collection', collection)
    //console.log('Query, RemotePublishSort, LocalSubscribeSort and Limit are', query, pubsort, subsort, limit)
    //console.log('Count', data.length)

    const sendData = () => {
      onData(null, {
        data,
      })
    }

    sendData()
  }
}

export default (actionsMapper, component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps(actionsMapper)
)(component)
