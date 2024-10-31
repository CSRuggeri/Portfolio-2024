import React from 'react';
import styles from './ExperienceTimeline.module.css'; // Assuming you're using CSS Modules

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
        'Group project with Express, EJS, and JavaScript, focused on sports event management and content display.',
      link: 'https://your-portfolio-link.com',
      image: 'https://res.cloudinary.com/doxyqgk7w/image/upload/v1706627979/atqfinppilot7vuikkfn.jpg',
      techStack: ['Express', 'EJS', 'JavaScript'],
    },
  ];

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  return (
    <div className={styles.timeline}>
      {experiences.map((exp, index) => {
        const isYouTubeLink = exp.image.includes('youtube.com');
        const embedUrl = isYouTubeLink ? getYouTubeEmbedUrl(exp.image) : null;

        return (
          <div className={styles.card} key={index}>
            <div className={styles.cardHeader}>
              {isYouTubeLink && embedUrl ? (
                <iframe
                  width="100%"
                  height="315"
                  src={embedUrl}
                  title={exp.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={exp.image} alt={exp.title} className={styles.cardImage} />
              )}
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{exp.title}</h2>
              <p className={styles.cardDescription}>{exp.description}</p>
              <div className={styles.techStack}>
                {exp.techStack.map((tech, idx) => (
                  <span className={styles.techItem} key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={exp.link} className={styles.cardLink}>
                Visit Project
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;
