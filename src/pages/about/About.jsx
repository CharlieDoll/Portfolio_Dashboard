import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-section">
      <img src="/images/about.jpg" alt="About Me" className="about-image" />
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I am a motivated and adaptable software developer with a background in administration, recently transitioning into software engineering. I completed rigorous bootcamps in full-stack development and AI, gaining hands-on experience with industry-standard tools and technologies such as Python, JavaScript, React, and MySQL. 
        </p>
        <p>
          My passion lies in building applications that are visually appealing, functional, and accessible to everyone. I have a strong commitment to teamwork and a proactive approach to learning, which helps me thrive in collaborative environments. I am experienced in front-end and back-end development, leveraging frameworks like React, Node.js, and Express to create user-friendly and scalable applications.
        </p>
        <p>
          In addition to my technical skills, I have a keen interest in AI and machine learning, with practical experience in prompt engineering and integrating APIs for creative projects, such as music generation. My journey from administrative roles to software development has enriched me with a diverse skill set, enabling me to approach challenges with a unique perspective.
        </p>
      </div>
    </div>
  );
}

export default About;
