import React from 'react'

import FeedItem from './feeditem.jsx'

export default ({data}) => (
  <div className='simplefeed-wrapper'>
    {data.map(task => (
      <div key={task._id}>
        <FeedItem data={task} />
      </div>
    ))}
  </div>
)
