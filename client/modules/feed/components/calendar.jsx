import { ApolloProvider } from 'react-apollo'

import React from 'react'
import { connect } from 'react-apollo'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Accounts } from 'meteor/std:accounts-ui'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
})

const App = ({ userId, calendar }) => {
  return (
    <div>
      <Accounts.ui.LoginForm />
      { userId ? (
        <div>
          <pre>{JSON.stringify(calendar, null, 2)}</pre>
          <button onClick={() => calendar.refetch()}>Refetch!</button>
        </div>
      ) : 'Please log in!' }
    </div>
  )
}

// This container brings in Apollo GraphQL data
const AppWithData = connect({
  mapQueriesToProps({ ownProps }) {
    alert(Object.keys(ownProps))
    if (ownProps.userId) {
      return {
        calendar: {
          query: gql`
            query getCalendarData ($desc: String!) {
              feed(description: $desc) {
                description
                uuid
                randomString
              }
            }
          `,
          variables: {
            desc: "test",
          },
        },
      }
    }
  },
})(App)

// This container brings in Tracker-enabled Meteor data
const AppWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId(),
  }
}, AppWithData)

export default ({client}) => (
  <ApolloProvider client={client} >
    <AppWithUserId />
  </ApolloProvider>
)
