import { ApolloProvider } from 'react-apollo'

import React from 'react'

import App from '/imports/ui/App'

export default ({client}) => (
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>
)

