import React from 'react'
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Contact Hub</h1>

        <p>
          Contact Hub is a simple and modern user management system.
          You can add, edit, delete and organize users easily with a clean UI.
        </p>

        <p>
          Built with React, Redux, and Bootstrap, this project focuses on
          simplicity, performance, and beautiful UI design.
        </p>

        <div className="stats">
          <div className="stat">
            <h3>100%</h3>
            <p>Responsive</p>
          </div>

          <div className="stat">
            <h3>Fast</h3>
            <p>Performance</p>
          </div>

          <div className="stat">
            <h3>Modern</h3>
            <p>Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About