import React from 'react';

export default (props) => {
  const style = {
    padding: '1em',
    backgroundColor: 'whitesmoke'
  };
  
  const period = props.date.end ?
    `${props.date.start} - ${props.date.end}` :
    `${props.date.start} - present`;
  
  return (
    <div style={style} className="project">
      <div>{period}</div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <p>{props.client}</p>
      <p>{props.role}</p>
      
      <ul>
        { props.highlights.map((highlight) =>
          <li>{highlight}</li>
        )}
      </ul>
    </div>
  )
}