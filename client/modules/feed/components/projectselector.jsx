import React from 'react'

import Container from '../containers/container'

import Query from '../state/projectselector'
import Button from './button.jsx'
const ButtonContainer = Container(Query, Button)

export default ({taskid, data, actions}) => (
  <div>
  <ul id={taskid}>
    {data.map(project => (
      <li id={project._id} key={project._id} onClick={ actions.assignProject } >{project.description}</li>
    ))}
    <span style={{color:'red'}}><li><ButtonContainer buttontext="Settle here" /></li></span>
  </ul>
  </div>
)
