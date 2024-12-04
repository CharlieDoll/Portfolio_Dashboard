import React from 'react';
import './projects.css';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      image: '/images/advG1.jpg',
      title: 'Adventure Game',
      description: 'A fun Python game',
      githubLink: 'https://github.com/CharlieDoll/Adventure-Game1'
    },
    {
      image: '/images/portfolio.jpg',
      title: 'Smart Portfolio Dashboard',
      description: 'A React-based dynamic portfolio',
      githubLink: 'https://github.com/username/smart-portfolio-dashboard'
    },
    {
      image: '/images/advG1.jpg',
      title: 'Text Adventure Game',
      description: 'A Python game',
      githubLink: 'https://github.com/CharlieDoll/text_adventure_game'
    }
  ];

  return (
    <div className="portfolio-page">
      <div className="projects-section">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              <FaGithub /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;