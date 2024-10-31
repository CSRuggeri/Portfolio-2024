import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <div>
      <div className={styles.contact}>
        <a href="mailto:santiruu@gmail.com" className={styles.contactLink}>
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a href="https://github.com/CSRuggeri" className={styles.contactLink}>
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/santiruu/" className={styles.contactLink}>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </div>
  );
};
