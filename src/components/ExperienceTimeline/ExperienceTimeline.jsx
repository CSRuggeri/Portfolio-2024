import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Make My PC',
      description:
        'Ecommerce project with filtering, pagination, search, login, and more. Built with TypeScript, GraphQL, JavaScript, and React.',
      link: 'https://p-final-p-ccorp-front.vercel.app/',
      image: 'https://www.youtube.com/watch?v=1WTyGrmu9Zk&ab_channel=santiagoruggeri',
      techStack: ['TypeScript', 'GraphQL', 'React', 'JavaScript'],
    },
    {
      title: 'PokeAapp',
      description:
        'Solo project with pagination, filters, search, and API calls. Built with Express, Sequelize, React-Redux, and JavaScript.',
      link: 'https://your-portfolio-link.com',
      image: 'https://res.cloudinary.com/doxyqgk7w/image/upload/v1706627979/jvthxsr8sbb3yi6to8fi.jpg',
      techStack: ['Express', 'Sequelize', 'React-Redux', 'JavaScript'],
    },
    {
      title: 'SportGo',
      description:
        'Group project with Express, EJS, and JavaScript, focused on sports clothing, sales, strong and robust backend able to handle multiple actions and content display.',
      link: 'https://your-portfolio-link.com',
      image: 'https://res.cloudinary.com/doxyqgk7w/image/upload/v1706627979/atqfinppilot7vuikkfn.jpg',
      techStack: ['Express', 'EJS', 'JavaScript'],
    },
  ];

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const [modalData, setModalData] = useState(null);

  return (
    <Container className="py-5">
      <Row>
        {experiences.map((exp, index) => {
          const isYouTubeLink = exp.image.includes('youtube.com');
          const embedUrl = isYouTubeLink ? getYouTubeEmbedUrl(exp.image) : null;

          return (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow-lg bg-light text-dark d-flex flex-column">
                <div className="card-header">
                  {isYouTubeLink && embedUrl ? (
                    <iframe
                      width="100%"
                      height="200"
                      src={embedUrl}
                      title={exp.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <Card.Img variant="top" src={exp.image} alt={exp.title} />
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Text className="flex-grow-1 text-truncate" style={{ maxHeight: '3rem' }}>
                    {exp.description}
                  </Card.Text>
                  <div className="mb-3">
                    {exp.techStack.map((tech, idx) => (
                      <span className="badge bg-primary me-1" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline-dark" onClick={() => setModalData(exp)}>
                    Read More
                  </Button>
                  <a href={exp.link} className="btn btn-outline-dark mt-2">
                    Visit Project
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Modal */}
      {modalData && (
        <Modal show={!!modalData} onHide={() => setModalData(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalData.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalData(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ExperienceTimeline;

