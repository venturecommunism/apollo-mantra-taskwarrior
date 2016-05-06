import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

const collectionComposer = ({context}, onData) => {
  const { registerGqlTag, createNetworkInterface, ApolloClient, Meteor, Accounts } = context()
  registerGqlTag()

  const networkInterface = createNetworkInterface('/graphql')

  networkInterface.use([{
    applyMiddleware(request, next) {
      const currentUserToken = Accounts._storedLoginToken()
      if (!currentUserToken) {
        next()
        return
      }
      if (!request.options.headers) {
        request.options.headers = new Headers()
      }
      request.options.headers.Authorization = currentUserToken
      next()
    }
  }])

  const client = new ApolloClient({
    networkInterface,
  })

  const sendData = () => {
    onData(null, {
      client,
    })
  }

  sendData()
}

export default (actionsMapper, component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps(actionsMapper)
)(component)
