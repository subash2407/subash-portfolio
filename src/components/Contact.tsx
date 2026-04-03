import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Let's connect! I'm always open to discussing new projects, opportunities, and ideas.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactMethod}>
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <a href={`mailto:${portfolioData.personal.email}`}>
              {portfolioData.personal.email}
            </a>
          </div>

          <div className={styles.contactMethod}>
            <FaPhone className={styles.icon} />
            <h3>Phone</h3>
            <a href={`tel:${portfolioData.personal.phone}`}>
              {portfolioData.personal.phone}
            </a>
          </div>

          <div className={styles.contactMethod}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Location</h3>
            <p>{portfolioData.personal.location}</p>
          </div>
        </div>

        <div className={styles.socials}>
          <h3>Connect With Me</h3>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className={styles.socialLink}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <button className={styles.topButton} onClick={scrollToTop} title="Back to top">
        <FaArrowUp />
      </button>
    </section>
  );
};

export default Contact;
