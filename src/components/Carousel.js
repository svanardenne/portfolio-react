import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import CarouselCard from "./CarouselCard";

// Imports React Responsive Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SlideShow = (props) => {
  return (
    <section id="carousel" className="fades">
      <h2 className="carousel-title">Projects</h2>
      <Carousel showThumbs={false} className="carousel">
        {props.projects.map((project, i) => (
          <CarouselCard
            handleModal={props.handleModal}
            className="carousel-slide"
            key={i}
            projects={props.projects}
            project={project}
          />
        ))}
      </Carousel>
      <Link className="button" to="/projects">
        More Projects
      </Link>
    </section>
  );
};

export default SlideShow;
