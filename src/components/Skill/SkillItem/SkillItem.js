import * as S from "./style";
import { useDispatch } from "react-redux";
import { showModal } from "../../../modules/redux/modal";
import React, { useCallback } from "react";
import ProjectModal from "../../modal/Modal/ProjectModal/ProjectModal";

const SkillItem = () => {
  const dispatch = useDispatch();
  const modalOn = useCallback(
    (modal) => {
      dispatch(showModal(modal));
    },
    [dispatch]
  );
  return (
    <>
      <S.SkillItem onClick={() => modalOn(ProjectModal)}>
        <S.SkillGroup>
          <img src="springboot.png" />
          <S.SkillCotent>
            <S.SkillTitle>springboot</S.SkillTitle>
          </S.SkillCotent>
        </S.SkillGroup>
        <S.ProgressName>Progress</S.ProgressName>
        <S.Progress value="20" max="100"></S.Progress>
        <S.ProgressName>Progress</S.ProgressName>
        <S.Progress value="20" max="100"></S.Progress>
        <S.GitURL href="https://github.com/Ahnyeongjun" target="blank">
          GiT GO
        </S.GitURL>
      </S.SkillItem>
    </>
  );
};
export default SkillItem;
