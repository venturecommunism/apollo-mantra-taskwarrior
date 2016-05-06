import { Accounts } from 'meteor/accounts-base'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { registerGqlTag } from 'apollo-client/gql'

import Collections from '/lib/collections/collections'
import {Meteor} from 'meteor/meteor'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactiveDict} from 'meteor/reactive-dict'
import {Tracker} from 'meteor/tracker'

export function initContext() {
  return {
    ApolloClient,
    createNetworkInterface,
    Meteor,
    FlowRouter,
    Collections,
    Accounts,
    registerGqlTag,
    LocalState: new ReactiveDict(),
    Tracker
  }
}
