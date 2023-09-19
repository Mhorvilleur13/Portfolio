import React from "react";
import ProjectItem from "../components/projectItem";
import "../styles/project.css";
import { ProjectList } from "../helpers/projectList";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
