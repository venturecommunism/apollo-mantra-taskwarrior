import { initContext } from './configs/context'
import { createApp } from 'mantra-core'

import feedModule from './modules/feed'

const context = initContext()

const app = createApp(context)

app.loadModule(feedModule)

app.init()

