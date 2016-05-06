import React from 'react'

import LoginAndUserComponent from '../../apollo/components/loginanduser.jsx'
import Container from '../../apollo/containers/container.js'
const LoginAndUserContainer = Container(LoginAndUserComponent)

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-9">
            <LoginAndUserContainer />
          </div>
        </div>
      </div>
    )
  }
}
