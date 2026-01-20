import React from "react";
import textClass from '../assets/images/text-class.jpg';
import neaLogo from '../assets/images/nea_logo.png';
import pinSecret from '../assets/images/pinsecret.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project-card">
                    <a href="https://github.com/kadirbalalan/Text-Classification-SpaCy/blob/main/Classification.ipynb" target="_blank" rel="noreferrer" className="image-container">
                        <img src={textClass} alt="Text Classification with SpaCy - NLP" />
                    </a>
                    <a href="https://github.com/kadirbalalan/Text-Classification-SpaCy/blob/main/Classification.ipynb" target="_blank" rel="noreferrer"><h2>Text Classification with SpaCy - NLP</h2></a>
                    <p>This is a model that can identify positive or negative movie reviews.</p>
                </div>
                <div className="project-card">
                    <a href="#" target="_blank" rel="noreferrer" className="image-container">
                        <img src={neaLogo} alt="Exoplanets Data Analysis with Pandas" style={{ objectFit: 'contain', padding: '10px', backgroundColor: '#000' }} />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Exoplanets Data Analysis with Pandas</h2></a>
                    <p>This project intends to learn more about exoplanets using NASA's exoplanets data.</p>
                </div>
                <div className="project-card">
                    <a href="https://github.com/kadirbalalan/pinsecrets" target="_blank" rel="noreferrer" className="image-container">
                        <img src={pinSecret} alt="PinSecrets - Personalized Password Creator" />
                    </a>
                    <a href="https://github.com/kadirbalalan/pinsecrets" target="_blank" rel="noreferrer"><h2>PinSecrets - Personalized Password Creator (Harvard Finishing Project)</h2></a>
                    <p>Create a strong password that is generated just for you. A project written entirely in Python.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;