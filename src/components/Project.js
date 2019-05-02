import React from 'react';
import styles from './Project.module.css';

export default (props) => {
  const period = props.date.end ?
    `${props.date.start} - ${props.date.end}` :
    `${props.date.start} - present`;
  
  // UI
  // 
  return (
    <div className={styles.project}>
      <h3 className={styles.projectName}>
        {props.name}
        <span className={styles.projectRole}>
          &nbsp;|&nbsp;
          {props.role}
        </span>
      </h3>
      
      <div className={styles.projectPeriod}>
        { props.employer &&
          <span className={styles.projectEmployer}>
            {props.employer}
          </span>
        }
        &nbsp;|&nbsp;
        {period}
      </div>
      
      <p>{props.desc}</p>
      
      <ul className={styles.projectTechnologies}>
        { props.technologies.map((tech, index) =>
          <li key={index}>{tech}</li>
        )}
      </ul>
    </div>
  )
}