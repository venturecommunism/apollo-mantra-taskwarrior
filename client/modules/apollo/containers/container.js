import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

const collectionComposer = ({context, authtokens}, onData) => {
  const { registerGqlTag, createNetworkInterface, ApolloClient, Meteor, Accounts } = context()
  registerGqlTag()

  const networkInterface = createNetworkInterface('/graphql')

  networkInterface.use([{
    applyMiddleware(request, next) {
      authtokens(request, next)
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

const contextMapper = (context, actions) => ({
  authtokens: actions.loginanduser.authtokens,
  context: () => context,
})

export default (component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps(contextMapper)
)(component)
