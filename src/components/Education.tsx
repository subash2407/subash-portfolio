import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from '../styles/Education.module.css';

const Education: React.FC = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.timeline}>
          {portfolioData.education.map((edu, index) => (
            <div key={edu.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.eduContent}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.location}>{edu.location}</p>
                <div className={styles.details}>
                  <span>{edu.duration}</span>
                  {(edu as any).cgpa && <span>{(edu as any).cgpa}</span>}
                  {(edu as any).percentage && <span>{(edu as any).percentage}</span>}
                </div>
              </div>
              {index < portfolioData.education.length - 1 && <div className={styles.line}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
