import React from 'react';
import styles from './Project.module.css';

export default (props) => {
  const style = {
    padding: '1em',
    backgroundColor: 'whitesmoke'
  };
  
  const period = props.date.end ?
    `${props.date.start} - ${props.date.end}` :
    `${props.date.start} - present`;
  
  return (
    <div className={styles.project}>
      <div className={styles.projectPeriod}>{period}</div>
      
      <div className="pure-g">
        <div className="pure-u-1-2">
          <h3 className={styles.projectRole}>{props.role}</h3>
          <h4 className={styles.projectEmployer}>{props.employer}</h4>
          
          <ul className={styles.projectTechnologies}>
            { props.technologies.map((tech, index) =>
              <li key={index}>{tech}</li>
            )}
          </ul>
        </div>
        
        <div className="pure-u-1-2">
          <h3 className={styles.projectName}>{props.name}
            { props.client &&
              <span className={styles.projectClient}>
                &nbsp;/&nbsp;
                {props.client}
              </span>
            }
          </h3>
          <ul className={styles.projectHighlights}>
            { props.highlights.map((highlight, index) =>
              <li key={index}>{highlight}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}