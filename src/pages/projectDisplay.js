import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/projectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../styles/projectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.gitLink} target="_blank">
        <img src={project.image}></img>
      </a>
      <h4>
        <b>Skills:</b> {project.skills}
      </h4>
      <a href={project.gitLink} target="_blank">
        {" "}
        <GitHubIcon className="git-link" />{" "}
      </a>

      {project.link && (
        <div>
          <a href={project.link} target="_blank" className="project-link-div">
            <p className="project-link">
              {" "}
              {project.link.replace(/^https?:\/\//, "")}
            </p>
            <OpenInNewIcon className="open-in-new" />
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectDisplay;
