import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/home.css";
import photo from "../assets/images/MikitoEditedPhoto.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Michael Horvilleur</h2>
        <img src={photo} className="photo" />
        <div className="prompt">
          <p className="jobHome">Front-End Developer</p>
          <a
            href={"https://www.linkedin.com/in/michael-horvilleur/"}
            target="_blank"
          >
            <LinkedInIcon className="icon" />
          </a>
          <a href="mailto:mhorvilleur13@gmail.com" target="_blank">
            <EmailIcon className="icon" />
          </a>
          <a href={"https://github.com/Mhorvilleur13"} target="_blank">
            <GitHubIcon className="icon" />
          </a>
        </div>
      </div>
      <div className="skills">
        <ol className="list">
          <li className="item">
            <h2>Brief</h2>
            <span>
              As a JavaScript programmer with a passion for education technology, 
              I am always seeking out new and innovative ways to use code to enhance the learning experience.
              I have strong expertise in full-stack development and am proficient in ReactJS, Node.js, Express,
              MySQL, and Firebase, enabling me to build robust, scalable, and user-focused web applications.
            </span>
          </li>
          <li className="item">
            <h2>Skills</h2>
            <span>
              React, JavaScript, TypeScript, Firebase, HTML, CSS, BootStrap,
              NodeJS, MySQL, ExpressJS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>English (Native), Spanish (Advanced)</span>
          </li>
          <li className="item">
            <h2>Contact</h2>
            <span>
              <b>Email:</b> Mhorvilleur13@gmail.com
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
