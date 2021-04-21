import BottomWrapper from "./BottomWrapper/BottomWrapper";
import TopWrapper from "./TopWrapper/TopWrapper";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestGetApi } from "../../lib/REQUEST";
import { call, put, takeEvery } from "redux-saga/effects";
import { SKILL } from "../../lib/API";
import { getSkillSaga, updateSkill } from "../../modules/redux/skill";
import * as S from "./style";

const Skill = () => {
  const skill = useSelector((state) => state.skill);
  const dispatch = useDispatch();

  const initMainSaga = useCallback(() => {
    dispatch(getSkillSaga());
  }, [dispatch]);

  useEffect(() => {
    initMainSaga();
  }, []);

  const onClick = async (type) => {
    console.log(type);
    await requestGetApi(SKILL.GET_TYPE_SKILL("ahn479512@gmail.com", type)).then(
      (res) => {
        dispatch(updateSkill(res.data, type));
        switch (res.status) {
          case 200: {
            updateSkill(requestGetApi, res.data);
          }
        }
      }
    );
  };
  const { default: developerImg } = require("../../asset/skill/developer.svg");
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <TopWrapper />
        <BottomWrapper skill={skill} />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Button
          onClick={() => {
            onClick("Language");
          }}
        >
          <S.Title>Language</S.Title>
          <S.Image img={developerImg}></S.Image>
        </S.Button>
        <S.Button
          onClick={() => {
            onClick("FRAMEWORK");
          }}
        >
          <S.Title>Framework</S.Title> <S.Image img={developerImg}></S.Image>
        </S.Button>
        <S.Button
          onClick={() => {
            onClick("TOOL");
          }}
        >
          <S.Title>Tool</S.Title> <S.Image img={developerImg}></S.Image>
        </S.Button>
        <S.Button
          onClick={() => {
            onClick("ETC");
          }}
        >
          <S.Title>ETC</S.Title> <S.Image img={developerImg}></S.Image>
        </S.Button>
      </S.RightWrapper>
    </S.Wrapper>
  );
};
export default Skill;
