// EducationSection.jsx
import React from 'react';
import './education.css';
import { FaUniversity } from 'react-icons/fa';

function EducationSection() {
  const educationData = [
    {
      degree: 'BSc Psychology',
      institution: 'Coventry University',
      duration: '2013 - 2016',
    },
    {
      degree: 'MSc Health Psychology',
      institution: 'Coventry University',
      duration: '2016 - 2017',
    },
    {
      degree: 'Full Stack Coding Bootcamp',
      institution: 'University of Birmingham',
      duration: '2022 - 2023',
    },
    {
      degree: 'AWS Architecture Professional + DevOps',
      institution: 'e-careers / IN4',
      duration: '2024 - Ongoing',
    },
    {
      degree: 'AI - Driven Software Engineering',
      institution: 'Skills City',
      duration: '2024',
    },
    {
      degree: 'IBM Introduction to DevOps',
      institution: 'Coursera',
      duration: 'Ongoing',
    },
  ];

  return (
    <div className="education-section">
      <div className="education-wheel">
        <div className="education-banner-container">
          <img src="/images/education.jpg" alt="Education Banner" className="education-banner-centered" />
        </div>
        <div className="education-cards-circle">
          {educationData.map((item, index) => (
            <div key={index} className="education-card">
              <FaUniversity className="education-icon" />
              <h3>{item.degree}</h3>
              <p className="institution">{item.institution}</p>
              <p className="duration">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
