import { initContext } from './configs/context'
import { createApp } from 'mantra-core'

import apolloModule from './modules/apollo'
import feedModule from './modules/feed'

const context = initContext()

const app = createApp(context)

app.loadModule(apolloModule)
app.loadModule(feedModule)

app.init()

