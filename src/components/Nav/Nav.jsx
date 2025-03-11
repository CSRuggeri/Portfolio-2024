import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setShowNavbar(currentScrollPos < prevScrollPos || currentScrollPos < 50);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <Navbar 
            expand="lg" 
            fixed="top"
            bg="primary" 
            variant="dark"
            className={`shadow ${showNavbar ? 'top-0' : 'top-[-80px]'} transition-all duration-50`}
        >
            <Container>
                <Navbar.Brand className="fw-bold text-light">
                    Santiago <span className="text-warning">Ruggeri</span>
                </Navbar.Brand>
                
                {/* Toggle Button */}
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />

                {/* Navbar Content */}
                <Navbar.Collapse 
                    id="basic-navbar-nav" 
                    className={`ms-auto ${isMenuOpen ? 'show' : ''}`}
                >
                    <Nav className="ms-auto text-center">
                        <Link to="name-card" smooth={true} duration={200} className="nav-link text-light fw-semibold px-3">Home</Link>
                        <Link to="skills" smooth={true} duration={200} className="nav-link text-light fw-semibold px-3">Skills</Link>
                        <Link to="experience" smooth={true} duration={200} className="nav-link text-light fw-semibold px-3">Experience</Link>
                        <Link to="contact" smooth={true} duration={200} className="nav-link text-light fw-semibold px-3">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;


