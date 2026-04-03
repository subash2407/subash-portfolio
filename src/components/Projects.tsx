import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.technologies}>
                <h4>Technologies:</h4>
                <div className={styles.techTags}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.highlights}>
                <h4>Key Features:</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
