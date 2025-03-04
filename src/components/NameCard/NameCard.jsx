import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const NameCard = () => {
  const description = `Hola! Bienvenido a mi portfolio.
  Esta es una breve descripción de mis habilidades para el desarrollo web.`;

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="shadow-lg bg-dark text-light p-4" style={{ maxWidth: '800px', width: '100%', borderRadius: '20px' }}>
        <Row className="g-4 align-items-center">
          {/* Profile Image */}
          <Col xs={12} md={4} className="text-center">
            <img
              src="https://res.cloudinary.com/doxyqgk7w/image/upload/v1706627979/jybhhhbenrrlog4ezqrx.jpg"
              alt="Santiago Ruggeri"
              className="rounded-circle img-fluid shadow"
              style={{ width: '180px', height: '180px', border: '4px solid #fff' }}
            />
          </Col>

          {/* Information */}
          <Col xs={12} md={8}>
            <Card.Body>
              <h2 className="fw-bold">Santiago Ruggeri</h2>
              <h5 className="text-primary">Web Developer</h5>
              <p className="text-light">{description}</p>

              {/* Contact Buttons */}
              <div className="d-flex gap-2 flex-wrap">
                <Button variant="outline-light" href="mailto:santiruu@gmail.com" className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </Button>
                <Button variant="outline-light" href="https://github.com/CSRuggeri" target="_blank" className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </Button>
                <Button variant="outline-light" href="https://www.linkedin.com/in/santiruu/" target="_blank" className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
