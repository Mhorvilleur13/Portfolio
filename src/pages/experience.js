import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November, 2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Innovalaciones</h3>
          <p>
            <b>Full-stack Developer</b>
          </p>
          <p>
           Full-stack Developer building efficient, user-friendly websites for freight forwarders and presenting product solutions to potential clients.
           Collaborated across teams to align technical development with business goals and ensure timely, impactful project delivery.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June, 2023 - March, 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> CloverTech</h3>
          <p>
            <b>Front-end Developer</b>
          </p>
          <p>
            Developed responsive web applications using React.js and TypeScript by creating detailed requirements, mockups,
            and use case diagrams in collaboration with a backend team. Built a patient-facing website that allows users to 
            manage personal profiles and share essential information with doctors.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September, 2019 - June, 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            U.S. Department of State
          </h3>
          <p>
            <b>English Language Fellow</b>
          </p>
          <p>
            Served as an English Language Fellow supporting public diplomacy by designing and delivering professional 
            development programs for over 500 teachers across 200 public schools. Coordinated with government officials
            to address educational challenges, secured funding for online learning resources, and enhanced ESL materials 
            and workshops at the American Center.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Codecademy</h3>
          <p>
            <b>Front-end Web Development Course</b>
          </p>
          <p>HTML, JavaScript, CSS, React, TypeScript, GitHub, NodeJS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Fordham University
          </h3>
          <p>
            <b>Master's Degree</b>
          </p>
          <p>Teaching English as a Second Language</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007-2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Pace University</h3>
          <p>
            <b>Bachelor's Degree</b>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
