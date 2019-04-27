import React from 'react';

export default (props) => {
  const style = {
    padding: '1em',
    backgroundColor: 'whitesmoke'
  };
  
  const highlights = props.highlights.map((highlight) => {
    return <li>{highlight}</li>
  })
  
  return (
    <div style={style} className="project">
      <div>{props.date.start} - {props.date.end}</div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <p>{props.client}</p>
      <p>{props.role}</p>
      <ul>{highlights}</ul>
    </div>
  )
}