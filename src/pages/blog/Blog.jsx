// Blog.jsx
import React from 'react';
import './blog.css';

function Blog() {
  return (
    <div className="blog-page">
      <div className="under-construction">
        <iframe
          src="https://giphy.com/embed/NMMj3u6gbrDdCTvUy0"
          width="480"
          height="360"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          style={{
            display: 'block',
            margin: '0 auto',
            border: 'none',
          }}
        ></iframe>
        <p style={{ textAlign: 'center' }}>This page is under construction. Please check back later!</p>
      </div>
    </div>
  );
}

export default Blog;
