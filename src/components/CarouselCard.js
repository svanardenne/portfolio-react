import React from "react";
import { Link } from "react-router-dom";

const CarouselCard = (props) => {
  return (
    <React.Fragment>
      <div
        onClick={() => props.handleModal(props.project.id)}
        className="carousel-link"
        to="/projects"
      >
        <div className="carousel-card-title">
          <h3>{props.project.projectTitle}</h3>
        </div>
        <div className="carousel-card">
          <img
            src={
              require(`../img/projects/${props.project.projectImage}`).default
            }
            alt={props.project.projectTitle}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarouselCard;
