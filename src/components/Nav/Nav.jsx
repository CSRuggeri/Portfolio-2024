import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Nav = () => {
  return (
    <div className="d-flex justify-content-center gap-3 mt-3">
      <a href="mailto:santiruu@gmail.com" className="btn btn-outline-light">
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </a>
      <a href="https://github.com/CSRuggeri" className="btn btn-outline-light">
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/santiruu/" className="btn btn-outline-light">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
    </div>
  );
};
