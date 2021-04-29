import React, { useState, useEffect } from "react";

// Component Imports
import Header from "./Header";
import Details from "./Details";
import SlideShow from "./Carousel";
import Modal from "./Modal";

const Home = (props) => {
  // Calls fade function from context
  useEffect(() => {
    props.context.fade();
  });

  // Sets state for this component
  const [projects, setProjects] = useState(
    props.context.projectData.slice(0, 3)
  );
  const [modalState, setModalState] = useState(false);
  const [modalIndex, setModalIndex] = useState([]);

  // Sets data for the modal window and creates the popup
  const handleModal = (data) => {
    setModalIndex(data);
    if (modalState === false) {
      setModalState(true);
    } else if (modalState === true) {
      setModalState(false);
    }
  };

  // Handler for moving to next project in modal window on click
  const handleNext = () => {
    if (modalIndex < projects.length) {
      setModalIndex(modalIndex + 1);
    }
  };

  // Handler for moving to previous project in modal window on click
  const handlePrevious = () => {
    if (modalIndex > 1) {
      setModalIndex(modalIndex - 1);
    }
  };

  // Handles the closing of the modal window
  const handleClose = () => {
    if (modalState === true) {
      setModalState(false);
    }
  };

  return (
    <React.Fragment>
      {/* Creates modal window based on state */}
      {modalState ? (
        <Modal
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          projects={projects}
          project={projects[modalIndex - 1]}
          modalIndex={modalIndex}
        />
      ) : null}
      <Header />
      <Details />
      <SlideShow projects={projects} handleModal={handleModal} />
    </React.Fragment>
  );
};

export default Home;
