import * as S from "./style";
import ProjectTag from "../ProjectTag/projectTag";
import { useDispatch } from "react-redux";
import { showModal } from "../../../modules/redux/modal";
import React, { useCallback } from "react";
import ProjectModal from "../../modal/Modal/ProjectModal/ProjectModal";

const ProjectItem = (props) => {
  const dispatch = useDispatch();
  const modalOn = useCallback(
    (modal) => {
      dispatch(showModal(modal));
    },
    [dispatch]
  );
  console.log(props);
  return (
    <>
      <S.ProjectItem onClick={() => modalOn(ProjectModal)}>
        <S.ProjectGroup>
          <img src={process.env.REACT_APP_S3_URL + props.project.file_name} />
          <S.ProjectCotent>
            <S.ProjectTitle>{props.project.project_title}</S.ProjectTitle>
            <S.ProjectMember>
              member={props.project.member || 1}
            </S.ProjectMember>
            <ProjectTag projectTag={props.project.tag} />
          </S.ProjectCotent>
        </S.ProjectGroup>
        <S.ProgressName>Progress</S.ProgressName>
        <S.Progress
          value={props.project.progress || 100}
          max="100"
        ></S.Progress>
        <S.ProgressName>Contribution</S.ProgressName>
        <S.Progress
          value={props.project.contribution || 100}
          max="100"
        ></S.Progress>
        <S.GitURL href={props.project.link} target="blank">
          GiT GO
        </S.GitURL>
      </S.ProjectItem>
    </>
  );
};
export default ProjectItem;
