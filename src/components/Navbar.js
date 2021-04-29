import React from "react";
import { NavLink } from "react-router-dom";

// Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  // Logic for toggling the nav links on click
  const navToggle = () => {
    if (window.innerWidth < 576) {
      const linkWrapper = document.querySelector(".link-wrapper");
      linkWrapper.classList.toggle("visible");
    }
  };

  return (
    <nav>
      <div className="link-wrapper">
        <NavLink onClick={navToggle} className="nav-link" to="/home">
          Home
        </NavLink>
        <NavLink onClick={navToggle} className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink onClick={navToggle} className="nav-link" to="/projects">
          Projects
        </NavLink>
        <NavLink onClick={navToggle} className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
      <FontAwesomeIcon
        icon={["fas", "bars"]}
        className="nav-toggle"
        onClick={navToggle}
      />
    </nav>
  );
};

export default Navbar;
