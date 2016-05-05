import React from 'react';

export default ({data, buttonpress, buttontext}) => (
  <div key={data._id} className="universal-button">

    <div onClick={buttonpress}>{buttontext}</div> <br />
  </div>
)
