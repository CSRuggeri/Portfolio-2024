import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function NameCard() {
    return (
        <header className='pt-5' id='name-card'>
            <div className='container py-md-5'>
                <div className='row d-flex flex-column flex-md-row align-items-center text-center text-md-start'>
                    
                    {/* Profile Image */}
                    <div className='col-md-5 d-flex justify-content-center'>
                        <img 
                            className='img-fluid rounded-circle shadow-lg' 
                            src="https://res.cloudinary.com/doxyqgk7w/image/upload/v1706627979/jybhhhbenrrlog4ezqrx.jpg"
                            alt="Santiago Ruggeri" 
                            style={{ 
                                width: '180px', 
                                height: '180px', 
                                objectFit: 'cover', 
                                border: '4px solid #fff',
                                transition: 'transform 0.3s ease-in-out'
                            }} 
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1.0)'}
                        />
                    </div>

                    {/* Info Section */}
                    <div className='col-md-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-4 mt-md-0'>
                        <h3 className='text-secondary fw-bold lh-1'>Santiago Ruggeri</h3>
                        <h1 className='text-capitalize text-primary fw-bold lh-1 mb-3'>
                            Web Developer
                        </h1>
                        <p className='text-muted lead'>
                            Hola! Bienvenido a mi portfolio. Esta es una breve descripción de mis habilidades para el desarrollo web.
                        </p>

                        {/* Social Links */}
                        <div className='d-flex gap-3 flex-wrap justify-content-center justify-content-md-start'>
                            <a href="mailto:santiruu@gmail.com" className="btn btn-outline-dark btn-lg d-flex align-items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} /> Email
                            </a>
                            <a href="https://github.com/CSRuggeri" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg d-flex align-items-center gap-2">
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/santiruu/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg d-flex align-items-center gap-2">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default NameCard;
