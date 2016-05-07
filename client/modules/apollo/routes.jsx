import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import {Layout} from '/client/configs/theme.jsx'
import Links from '../_home/components/links.jsx'

import LoginAndUserPage from './components/page.jsx'

export default (injectDeps) => {
  const LayoutCtx = injectDeps(Layout)

  FlowRouter.route('/gqllogin', {
    name: 'gqllogin',
    action() {
      mount(LayoutCtx, {
        content: () => (<LoginAndUserPage />),
        links: () => (<Links />)
      })
    }
  })
}
