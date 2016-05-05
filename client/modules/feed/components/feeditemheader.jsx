import React from 'react'

import ProjCont from './projorcont.jsx'
import Query from '../state/projorcont'
import Container from '../containers/container'
const ProjContContainer = Container(Query, ProjCont)

export default ({data}) => (
  <div className="feed-item__header">
    <div className="avatar" />

    <div className='name-date'>
      <div className="name">{data.username}</div>
    </div>

    <ProjCont data={data} />

  </div>
);
