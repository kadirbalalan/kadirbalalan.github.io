import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Adsbot</h3>
            <h4 className="vertical-timeline-element-subtitle">Growth Specialist</h4>
            <p>
              Generated $33,500+ in pipeline value by orchestrating a high-volume cold email system. Achieved a 27.4% response rate on LinkedIn. Generated 200K+ impressions from fresh content. Built end-to-end user retention workflows in Customer.io.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2025 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Nüve Core Fijital Pazarlama Ajansı</h3>
            <h4 className="vertical-timeline-element-subtitle">Marketing Intern</h4>
            <p>
              Hands-on training in digital marketing, copywriting, and campaign management. Contributed to content creation and participated in real-world projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2025 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">TransPerfect</h3>
            <h4 className="vertical-timeline-element-subtitle">Content Writer</h4>
            <p>
              Developed original text messages and email conversations to facilitate AI technology development. Generated high-quality, human-written content in Turkish.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2024 - March 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">İçerik101</h3>
            <h4 className="vertical-timeline-element-subtitle">Copywriter</h4>
            <p>
              Created personalized content for e-commerce, services, and promotional campaigns. Focused on engaging, audience-focused writing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Türkiye Zeka Vakfı</h3>
            <h4 className="vertical-timeline-element-subtitle">Voluntary Contributor & Writer</h4>
            <p>
              At the Turkish Intelligence Foundation (TZV), I research and deconstruct high-level scientific developments, translating them into engaging narratives for a high-IQ audience. I turn raw academic data into clear, digestible insights.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;