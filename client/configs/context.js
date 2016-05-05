import Collections from '/lib/collections/collections'
import {Meteor} from 'meteor/meteor'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactiveDict} from 'meteor/reactive-dict'
import {Tracker} from 'meteor/tracker'

export function initContext(reducer) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
