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
      <h2 className="text-center text-dark mb-4 fw-bold">My Experience</h2>
      <Row>
        {experiences.map((exp, index) => {
          const isYouTubeLink = exp.image.includes('youtube.com');
          const embedUrl = isYouTubeLink ? getYouTubeEmbedUrl(exp.image) : null;

          return (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="border-0 shadow-lg rounded-3 overflow-hidden bg-white">
                <div className="card-header p-0 border-0">
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
                    <Card.Img variant="top" src={exp.image} alt={exp.title} className="rounded-top" />
                  )}
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold text-primary">{exp.title}</Card.Title>
                  <Card.Text className="text-secondary flex-grow-1">
                    {exp.description}
                  </Card.Text>
                  <div className="mb-3">
                    {exp.techStack.map((tech, idx) => (
                      <span className="badge bg-info text-dark me-1" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="dark" className="mt-auto" onClick={() => setModalData(exp)}>
                    Read More
                  </Button>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mt-2">
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
            <Modal.Title className="fw-bold text-primary">{modalData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-secondary">{modalData.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => setModalData(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ExperienceTimeline;
