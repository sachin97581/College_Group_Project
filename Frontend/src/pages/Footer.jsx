// import React from "react";
// import "../style/Footer.css"; // import css file

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Left side - brand */}
//         <div className="footer-brand">
//           <h2>MyWebsite</h2>
//           <p>Helping people with the right information & support.</p>
//         </div>

//         {/* Middle - links */}
//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/progress">Progress</a></li>
//             <li><a href="/advice/1">Advice</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* Right side - social */}
//         <div className="footer-social">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐</a>
//             <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} MyWebsite | All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-title">
            <Heart className="footer-icon" />
            Health Care
          </h3>
          <p className="footer-description">
            Providing comprehensive healthcare information and support for maternal health and pregnancy care.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/miscarriage">Miscarriage Prevention</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/guides">Health Guides</a></li>
            <li><a href="/support">Support Groups</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={18} />
              <span>Mumbai, Maharashtra, India</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 (123) 456-7890</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>support@healthcare.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Health Care. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/terms">Terms of Service</a>
          <span className="separator">|</span>
          <a href="/privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;