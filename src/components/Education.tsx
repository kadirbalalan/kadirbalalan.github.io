import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Education.scss'
import googleLogo from '../assets/images/logos/google.png';
import udemyLogo from '../assets/images/logos/udemy.png';
import idsaLogo from '../assets/images/logos/idsa.png';
import harvardLogo from '../assets/images/logos/harvard.png';
import semrushLogo from '../assets/images/logos/semrush.png';
import hacettepeLogo from '../assets/images/logos/hacettepe.png';


function Education() {
  return (
    <div className="education-container" id="education">
      <h1>Education & Certifications</h1>
      <div className="education-grid">
        {/* Education 1 */}
        <div className="education-card">
          <div className="card-header">
            <img src={hacettepeLogo} alt="Hacettepe University" className="logo" />
            <span className="year">2020 - 2025</span>
          </div>
          <h3>Hacettepe Üniversitesi</h3>
          <h4>Bachelor's degree, English Language and Literature</h4>
          <p className="content">
            Studied English linguistics, literature, and cultural history. Developed strong analytical and communication skills.
          </p>
        </div>

        {/* Certification 1 - Harvard */}
        <a href="https://certificates.cs50.io/7d6164e2-a56a-4ab0-a17c-42e276bfd3b8.pdf?size=letter" target="_blank" rel="noreferrer" className="education-card">
          <div className="card-header">
            <img src={harvardLogo} alt="Harvard University" className="logo" />
            <span className="year">2024</span>
          </div>
          <h3>Harvard University</h3>
          <h4>CS50 Introduction to Programming with Python</h4>
          <p className="content">
            Comprehensive introduction to programming with Python, covering functions, variables, conditionals, loops, and object-oriented programming.
          </p>
        </a>

        {/* Certification 2 - Google */}
        <a href="https://www.coursera.org/account/accomplishments/verify/8D39S2LVK7CT" target="_blank" rel="noreferrer" className="education-card">
          <div className="card-header">
            <img src={googleLogo} alt="Google" className="logo" />
            <span className="year">Issued May 2023</span>
          </div>
          <h3>Google</h3>
          <h4>Data Analysis Certificate</h4>
          <p className="content">
            Professional certificate from Google on Coursera, covering data cleaning, analysis, visualization, and tools like SQL, R, and Tableau.
          </p>
        </a>

        {/* Certification 3 - Udemy */}
        <a href="https://www.udemy.com/certificate/UC-38768520-ccdd-4ccc-9ce4-e270d8f23250/" target="_blank" rel="noreferrer" className="education-card">
          <div className="card-header">
            <img src={udemyLogo} alt="Udemy" className="logo" />
            <span className="year">Issued May 2023</span>
          </div>
          <h3>Udemy</h3>
          <h4>Data Analysis with Pandas and Python</h4>
          <p className="content">
            In-depth course on data manipulation and analysis using the Pandas library in Python.
          </p>
        </a>

        {/* Certification 4 - Semrush */}
        <a href="https://static.semrush.com/academy/certificates/68ca978cc0/kadir-balalan_1.pdf" target="_blank" rel="noreferrer" className="education-card">
          <div className="card-header">
            <img src={semrushLogo} alt="Semrush" className="logo" />
            <span className="year">2023</span>
          </div>
          <h3>Semrush Academy</h3>
          <h4>Keyword Research with Semrush</h4>
          <p className="content">
            A Step-by-Step Guide to mastering keyword research techniques and tools provided by Semrush.
          </p>
        </a>

        {/* Certification 5 - Istanbul Data Science Academy (No Link) */}
        <div className="education-card">
          <div className="card-header">
            <img src={idsaLogo} alt="Istanbul Data Science Academy" className="logo" />
            <span className="year">Issued May 2023</span>
          </div>
          <h3>Istanbul Data Science Academy</h3>
          <h4>Artificial Intelligence Bootcamp</h4>
          <p className="content">
            Intensive bootcamp focused on AI concepts, machine learning algorithms, and practical applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;