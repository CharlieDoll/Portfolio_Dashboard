// MyRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/homepage/Home';
import Projects from '../components/projects/Projects';
import Blog from '../pages/blog/Blog';
import Education from '../pages/education/Education';
import Contact from '../pages/contact/Contact';
import About from '../pages/about/About';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


function MyRoutes() {
  return (
    <Router>
        <Navbar />
             <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/projects" element={<Projects />} />
                 <Route path="/blog" element={<Blog />} />
                 <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
             </Routes>
             <Footer/>
    </Router>
  );
}

export default MyRoutes;
