import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header id="home" className="main-header fades">
      <div className="banner">
        <div className="banner-text">
          <h1>
            Hi, I'm <span>Shaun van Ardenne</span>
          </h1>
          <h1>I'm a full-stack web developer</h1>
        </div>
        <Link className="button" to="#details">
          See my work
          <FontAwesomeIcon
            className="banner-icon"
            icon={["fas", "arrow-down"]}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
