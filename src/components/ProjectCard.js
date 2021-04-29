import React from "react";

const ProjectCard = (props) => {
  const project = props.project;

  return (
    <div className="card-wrapper">
      <img
        className="project-img"
        src={require(`../img/projects/${project.projectImage}`).default}
        alt={project.projectTitle}
      />
      <div className="project-info">
        <h3 className="project-title">{project.projectTitle}</h3>
        <div
          onClick={() => props.handleModal(project.id)}
          className="button project-button"
        >
          More info
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
