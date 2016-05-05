import React from 'react'

import FeedItemHeader from './feeditemheader.jsx'
import FeedItemFooter from './feeditemfooter.jsx'

export default ({data}) => (
  <div className='feed-item'>
    <FeedItemHeader data={data} />
    <div className='feed-item-duedate'>
      <h2>{data.due}</h2>
    </div>
    <div className='feed-item-description'>
      <h2>{data.description}</h2>
    </div>
    <div className='feed-item-entry'>
      {data.entry}
    </div>
    <div className='feed-item-status'>
      {data.status}
    </div>
    <div className='feed-item-uuid'>
      {data.uuid}
    </div>
    <FeedItemFooter data={data} />
  </div>
)
