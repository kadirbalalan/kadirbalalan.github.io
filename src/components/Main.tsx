import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile_picture from '../assets/images/pp.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile_picture} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kadirbalalan" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/kadirbalalan" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Kadir Balalan</h1>
          <p>Growth Specialist | B2B SaaS Growth & Automation | AI & Data</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/kadirbalalan" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/kadirbalalan" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;