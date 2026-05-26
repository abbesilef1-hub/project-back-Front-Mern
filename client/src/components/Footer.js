import React from 'react'
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Contact Hub</h2>
        <p>Manage your users easily and beautifully ✨</p>

        <div className="footer-links">
          <a href="#">Users</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="social-icons">
          <a href="#" className="social facebook">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#" className="social instagram">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#" className="social twitter">
            <i className="fab fa-x-twitter"></i>
          </a>

          <a href="#" className="social linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Contact Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer