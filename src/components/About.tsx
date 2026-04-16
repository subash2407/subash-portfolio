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
              I am a dedicated Full Stack Developer with a passion for building scalable and efficient applications. 
              With expertise in backend development using Node.js (NestJS) and PHP (Laravel,Codeigniter), combined with proficiency 
              in modern frontend frameworks like React(Nextjs), I bridge the gap between UI/UX and robust backend systems.
            </p>
            <p>
              Throughout my career, I have successfully designed and implemented complex ERP, HRMS, and CRM systems, 
              integrated third-party APIs, and collaborated with cross-functional teams to deliver high-quality solutions. 
              I thrive in agile environments and am committed to continuous learning and professional growth.
            </p>
            <p>
              My technical skill set spans across multiple domains, enabling me to take on diverse challenges and 
              deliver comprehensive end-to-end solutions that drive business value.
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
