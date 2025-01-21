import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copy">© 2024 Inclusign. All rights reserved.</p>
        <ul className="footer-links">
          {/* Opens Privacy Policy in a new tab */}
          <li>
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          
          {/* Opens Terms of Use in a new tab */}
          <li>
            <a
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
          </li>
          
          {/* Opens Contact in a new tab (or update href as needed) */}
          <li>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
