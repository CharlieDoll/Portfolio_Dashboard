// Footer.jsx
import React from 'react';
import '../styles/footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Connect with me:</p>
        <div className="footer-icons">
          <a href="https://github.com/CharlieDoll" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://linkedin.com/in/charlie-nunn-453811249" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footer-ownership">
        <p>&copy; 2024 Charlie Nunn. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
