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
      
      <p className={styles.projectDesc}><b>{props.desc}</b></p>
      
      <div className={styles.projectHighlights}>
        { props.highlights.map((highlight, index) =>
          <div className={styles.projectHighlight} key={index}>
            <p className={styles.projectHighlightDesc}>
              {highlight.desc}
              &nbsp;|&nbsp;
              { highlight.tech.map((technology) =>
                <span className={styles.projectHighlightTech} key={technology}>{technology}</span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}