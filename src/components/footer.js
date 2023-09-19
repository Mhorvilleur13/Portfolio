import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>&copy; 2023 </p>
    </div>
  );
}

export default Footer;
