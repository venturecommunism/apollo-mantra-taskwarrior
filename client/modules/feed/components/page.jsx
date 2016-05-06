import React from 'react'

import UserQuery from '../../apollo/state/apollocontext.js'
import UserComponent from '../../apollo/components/provider.jsx'
import ApolloProviderContainer from '../../apollo/containers/apolloprovidercontainer.js'
const UserContainer = ApolloProviderContainer(UserQuery, UserComponent)

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-9">
            <UserContainer />
          </div>
        </div>
      </div>
    )
  }
}
