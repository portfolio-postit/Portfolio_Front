import React from "react";
import Modal from "../Modal";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import ProjectModalForm from "../../ModalForm/ProjectModalForm/ProjectModalForm";

const ProjectModal = () => {
  return (
    <Modal>
      <ModalCloseBtn />
      <ProjectModalForm />
    </Modal>
  );
};

export default ProjectModal;
