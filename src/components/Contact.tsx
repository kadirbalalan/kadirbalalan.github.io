import React from 'react';
import '../assets/styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p className="contact-message">
            Got a question, a project idea, or just want to say hi? My inbox is always open.
            Whether you have a specific proposal or just want to chat about tech, growth, or data,
            feel free to reach out! I'll try my best to get back to you!
          </p>

          <div className="contact-info">
            <a href="mailto:kadirbalalan0@gmail.com" className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span>kadirbalalan0@gmail.com</span>
            </a>

            <a href="tel:+905542580426" className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <span>+90 554 258 0426</span>
            </a>

            <div className="social-links-contact">
              <a href="https://github.com/kadirbalalan" target="_blank" rel="noreferrer" className="contact-item small">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/kadirbalalan" target="_blank" rel="noreferrer" className="contact-item small">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;