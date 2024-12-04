// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="home-section">
      <div className="home-content">
        <div className="home-text-box">
          <img src="/images/profile.jpg" alt="Personal" className="home-personal-image" />
          <div className="home-text">
            <h1>Charlie Nunn</h1>
            <p>Hi! Welcome to my portfolio.</p>
            <p>
              I am a junior software engineer, specializing in building responsive and dynamic web
              applications, leveraging the latest technologies. Please explore my projects and feel
              free to contact me for collaboration!
            </p>
            <Link to="/projects" className="cta-button">
              Explore My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
