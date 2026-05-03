import React from 'react';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              I am a backend-focused Full Stack Developer who enjoys designing scalable systems and reliable APIs.
              I work primarily with Node.js (NestJS) and Laravel on the server side, and React (Next.js) when
              building product experiences with frontend teams.
            </p>
            <p>
              I have delivered multi-module ERP and HRMS applications, led a small engineering team through sprints,
              and integrated compliance and finance flows using E-invoice, E-waybill, and Tally alongside other REST services.
            </p>
            <p>
              I care about clear architecture, performance at the database and API layer, and shipping software that
              stays maintainable as the business grows.
            </p>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>4+</h3>
              <p>Years of Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>2</h3>
              <p>Languages</p>
            </div>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p>Team Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
