import React from 'react';
import { portfolioData } from '../data/portfolio';
import { FaDownload } from 'react-icons/fa';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hi, I'm <span className={styles.highlight}>{portfolioData.personal.name}</span>
        </h1>
        <p className={styles.heroSubtitle}>{portfolioData.personal.title}</p>
        <p className={styles.heroDescription}>
          {portfolioData.personal.summary}
        </p>
        
        <div className={styles.heroActions}>
          <button className={styles.ctaButton}>
            <FaDownload /> Download Resume
          </button>
          <button className={styles.ctaButtonSecondary}>
            Let's Connect
          </button>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email:</span>
            <a href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone:</span>
            <a href={`tel:${portfolioData.personal.phone}`}>{portfolioData.personal.phone}</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Location:</span>
            <span>{portfolioData.personal.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
