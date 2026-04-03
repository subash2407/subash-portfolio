import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Subash V</h1>
        </div>
        
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>About</button>
          <button onClick={() => scrollToSection('experience')} className={styles.navLink}>Experience</button>
          <button onClick={() => scrollToSection('skills')} className={styles.navLink}>Skills</button>
          <button onClick={() => scrollToSection('projects')} className={styles.navLink}>Projects</button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</button>
        </nav>

        <div className={styles.contactIcons}>
          <a href={`mailto:${portfolioData.personal.email}`} title="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/subash-v-36563321b/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/subash-v" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
