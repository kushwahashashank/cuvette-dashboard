import React, { useState } from "react";
import "./SideNavbar.css";
import { Link } from "react-router-dom";
import { FiBarChart2, FiFile, FiAward } from "react-icons/fi";
const SideNavbar = () => {
  const [active, setActive] = useState("skill");
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Link
          className={
            active === "dashboard" ? "navbar-option active" : "navbar-option"
          }
          onClick={() => setActive("dashboard")}
          to="/"
        >
          <FiBarChart2 /> Dashboard
        </Link>
        <Link
          className={
            active === "skill" ? "navbar-option active" : "navbar-option"
          }
          onClick={() => setActive("skill")}
          to="/"
        >
          <FiAward />
          Skill Test
        </Link>

        <Link
          className={
            active === "internships" ? "navbar-option active" : "navbar-option"
          }
          onClick={() => setActive("internships")}
          to="/"
        >
          <FiFile />
          Internships
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
