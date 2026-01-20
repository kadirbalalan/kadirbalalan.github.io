import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import growthLogo from '../assets/images/logos/growth.png';
import seoLogo from '../assets/images/logos/seo.png';

const labelsFirst = [
    "B2B Sales",
    "Cold Outreach",
    "Pipeline Generation",
    "Go-to-Market Strategy",
    "Revenue Operations",
];

const labelsSecond = [
    "Python",
    "N8n",
    "Web Scraping",
    "API Integration",
    "SQL",
    "Pandas",
];

const labelsThird = [
    "Programmatic SEO",
    "Prompt Engineering",
    "NLP",
    "Content Strategy",
    "PLG",
    "Zero Ad Spend Growth",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <img src={growthLogo} alt="Growth & Revenue" className="skill-icon growth-logo" />
                        <h3>Growth & Revenue Architecture</h3>
                        <p>Architecting high-volume outbound engines that convert. Generated $33,500+ in pipeline value by orchestrating 179K+ strategic cold emails and mastering go-to-market execution.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Key Skills:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Engineering & Automation</h3>
                        <p>Building scalable systems that replace manual labor. Specialized in leveraging Python (Pandas), N8n, and Apify to automate complex data workflows and scrapers.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech Stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <img src={seoLogo} alt="SEO & Content" className="skill-icon" />
                        <h3>SEO & Content Engineering</h3>
                        <p>Driving massive organic growth through linguistic precision and AI. Achieved 2.03M+ SEO impressions with zero ad spend by fusing NLP mastery with programmatic content strategies.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Key Skills:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;