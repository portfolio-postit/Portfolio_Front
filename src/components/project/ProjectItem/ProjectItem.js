import * as S from "./style";
import ProjectTag from "../ProjectTag/projectTag";
import { useDispatch } from "react-redux";
import { showModal } from "../../../modules/redux/modal";
import React, { useCallback } from "react";
import ProjectModal from "../../modal/Modal/ProjectModal/ProjectModal";

const ProjectItem = () => {
  const dispatch = useDispatch();
  const modalOn = useCallback(
    (modal) => {
      dispatch(showModal(modal));
    },
    [dispatch]
  );
  return (
    <>
      <S.ProjectItem onClick={() => modalOn(ProjectModal)}>
        <S.ProjectGroup>
          <img src="springboot.png" />
          <S.ProjectCotent>
            <S.ProjectTitle>springboot</S.ProjectTitle>
            <S.ProjectMember>member = 1</S.ProjectMember>
            <ProjectTag />
          </S.ProjectCotent>
        </S.ProjectGroup>
        <S.ProgressName>Progress</S.ProgressName>
        <S.Progress value="20" max="100"></S.Progress>
        <S.ProgressName>Progress</S.ProgressName>
        <S.Progress value="20" max="100"></S.Progress>
        <S.GitURL href="https://github.com/Ahnyeongjun" target="blank">
          GiT GO
        </S.GitURL>
      </S.ProjectItem>
    </>
  );
};
export default ProjectItem;
