import React from "react";
import Modal from "../Modal";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import ProjectModalForm from "../../ModalForm/ProjectModalForm/ProjectModalForm";

const ProjectModal = (props) => {
  console.log(props);
  return (
    <Modal>
      <ModalCloseBtn />
      <ProjectModalForm project={props} />
    </Modal>
  );
};

export default ProjectModal;
