import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    // Check if the current location matches the given path
    return location.pathname === path;
  };

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <MenuIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/" id={isActive("/") ? "currentScreenNav" : ""}>
          Home
        </Link>
        <Link
          to="/projects"
          id={isActive("/projects") ? "currentScreenNav" : ""}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          id={isActive("/experience") ? "currentScreenNav" : ""}
        >
          Experience
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
