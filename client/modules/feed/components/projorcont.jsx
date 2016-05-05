import React from 'react'
import FeedDomain from '../actions/domain'

export default ({data}) => (
  <div key={data._id} className='project-or-context'>
    {/* name has to be the same for buttons to toggle between them */}
    <input className={data._id} type="radio" name="setProjectOrContext" value='project' onChange={FeedDomain.setProjectOrContext} />&nbsp;Project&nbsp;
    <input className={data._id} type="radio" name="setProjectOrContext" value="context" onChange={FeedDomain.setProjectOrContext} />&nbsp;Context<br />
  </div>
)
