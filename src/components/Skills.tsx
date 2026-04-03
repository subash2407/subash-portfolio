import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from '../styles/Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.skillsGrid}>
          
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Backend Development</h3>
            <div className={styles.skillTags}>
              {portfolioData.skills.backend.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Frontend Development</h3>
            <div className={styles.skillTags}>
              {portfolioData.skills.frontend.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Tools & Databases</h3>
            <div className={styles.skillTags}>
              {portfolioData.skills.tools.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>

          {/* <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Advanced Skills</h3>
            <div className={styles.skillTags}>
              {portfolioData.skills.advanced.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div> */}

        </div>

        <div className={styles.proficiencies}>
          <h3 className={styles.categoryTitle}>Language Proficiency</h3>
          <div className={styles.languageTags}>
            {portfolioData.languages.map((lang, idx) => (
              <span key={idx} className={styles.languageTag}>{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
