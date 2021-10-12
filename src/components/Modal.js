import React, { useEffect } from "react";

// Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = (props) => {
  // Global variables imported through props
  const { modalIndex, project, projects } = props;

  // Global handlers imported through props
  const { handleClose, handleNext, handlePrevious } = props;

  // Fades in the modal window on component mount
  useEffect(() => {
    const modalWrapper = document.getElementById("modal-window");
    modalWrapper.style.opacity = 1;
  });

  return (
    <div id="modal-window" style={{ opacity: 0 }} className="modal-wrapper">
      <div className="modal noselect">
        {/* Window Close Button */}
        <div onClick={() => handleClose()} className="modal-close">
          <FontAwesomeIcon
            className="modal-close-icon"
            icon={["fas", "window-close"]}
          />
        </div>

        {/* Renders arrow only if not first project in list */}
        {modalIndex > 1 ? (
          <div onClick={() => handlePrevious()} className="modal-left-arrow">
            <FontAwesomeIcon
              className="arrow-icon"
              icon={["fas", "arrow-left"]}
            />
          </div>
        ) : null}

        <div>
          <h2>{project.projectTitle}</h2>
          <div className="modal-details">
            <p className="select">{project.projectText}</p>
          </div>
          <img
            className="modal-img"
            src={require(`../img/projects/${project.projectImage}`).default}
          />
        </div>

        {/* Renders arrow only if not last project in list */}
        {modalIndex < projects.length ? (
          <div onClick={() => handleNext()} className="modal-right-arrow">
            <FontAwesomeIcon
              className="arrow-icon"
              icon={["fas", "arrow-right"]}
            />
          </div>
        ) : null}

        <div className="modal-buttons">
          <a className="button" target="_blank" href={project.projectLink}>
            Live Demo
          </a>
          <a className="button" target="_blank" href={project.githubLink}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
