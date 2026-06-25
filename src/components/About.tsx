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
              I am a Full Stack Developer with 4.2 years of experience building ERP and HRMS applications. 
              I work primarily with Node.js (NestJS), PostgreSQL, and MySQL on the backend, and React.js (Next.js) on the frontend to deliver scalable and reliable business applications.
            </p>
            <p>
              I have developed multi-module ERP and HRMS systems, implemented secure REST APIs with
              JWT Authentication and Role-Based Access Control (RBAC), and integrated third-party services including E-Invoice, E-Way Bill, and Tally. My experience also includes database design, query optimization, production support, and application maintenance.
            </p>
            <p>
              I enjoy solving business problems through technology, improving application performance, and building maintainable software that can grow with evolving business requirements.
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
