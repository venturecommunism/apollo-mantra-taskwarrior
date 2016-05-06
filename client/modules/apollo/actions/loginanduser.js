import { registerGqlTag } from 'apollo-client/gql'
import { createNetworkInterface } from 'apollo-client'

  registerGqlTag()

  networkInterface = createNetworkInterface('/graphql')

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


export default {
}
