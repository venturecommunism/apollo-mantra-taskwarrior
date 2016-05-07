import React from 'react';

import createTaskComposer from '../state/createtask'
import CreateTask from './createtask.jsx'
const CreateTaskContainer = createTaskComposer(CreateTask) 

import Container from '../containers/container'
import MainQuery from '../state/feedquery'
import PreviousCalendarQuery from '../state/previouscalendarquery'
import Feed from './feed.jsx'

const FeedContainer = Container(MainQuery, Feed)
const PreviousCalendarContainer = Container(PreviousCalendarQuery, Feed)

import SideBarQuery from '../state/sidebarquery'
import ParamsComposer from '../state/params'
import SideBar from './sidebar.jsx'
const SideBarContainer = ParamsComposer(Container(SideBarQuery, SideBar))

import OverDueQuery from '../state/overduequery'
const OverDueContainer = Container(OverDueQuery, Feed)

import CalendarQuery from '../state/calendarquery'
const CalendarContainer = Container(CalendarQuery, Feed)

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <SideBarContainer />
          </div>
          <div className="col-md-9">
            <CreateTaskContainer />
            <OverDueContainer />
            {/* <PreviousCalendarContainer />
            <FeedContainer /> */}
            <CalendarContainer />
          </div>
        </div>
      </div>
    );
  }
}
