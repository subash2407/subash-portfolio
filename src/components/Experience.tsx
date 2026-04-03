import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from '../styles/Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Professional Experience</h2>
        <div className={styles.timeline}>
          {portfolioData.experience.map((job, index) => (
            <div key={job.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobTitle}>{job.position}</h3>
                  <span className={styles.duration}>{job.duration}</span>
                </div>
                <p className={styles.company}>{job.company} • {job.location}</p>
                <ul className={styles.highlights}>
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              {index < portfolioData.experience.length - 1 && <div className={styles.line}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
