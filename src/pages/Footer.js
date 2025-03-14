import React from 'react';
import '../styles/footer.css';
import facebookIcon from '../components/facebookicon.png';
import twitterIcon from '../components/twittericon.png';
import instagramIcon from '../components/instagramicon.png';
import emailIcon from '../components/emailicon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li>Course Forums</li>
            <li>Resources Library</li>
            <li>Find Study</li>
            <li>Academics Events</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Community Guidelines</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={emailIcon} alt="Email" />
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <p className="footer-text">EduConnect Ghana. Empowering student collaboration across universities</p>
    </footer>
  );
};

export default Footer;