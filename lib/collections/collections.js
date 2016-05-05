import {Mongo} from 'meteor/mongo'

export const tasks = new Mongo.Collection('tasks')
export const taskspending = new Mongo.Collection('taskspending')
export const tasksbacklog = new Mongo.Collection('tasksbacklog')
export const Timer = new Mongo.Collection('timer')
