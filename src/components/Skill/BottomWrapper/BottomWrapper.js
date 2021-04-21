import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestGetApi } from "../../../lib/REQUEST";
import { call, put, takeEvery } from "redux-saga/effects";
import { SKILL } from "../../../lib/API";
import { getSkillSaga, updateSkill } from "../../../modules/redux/skill";
import * as S from "./style";

const BottomWrapper = () => {
  const skill = useSelector((state) => state.skill);
  console.log(skill);
  const dispatch = useDispatch();

  const initMainSaga = useCallback(() => {
    dispatch(getSkillSaga());
  }, [dispatch]);

  useEffect(() => {
    initMainSaga();
  }, []);

  const onClick = async () => {
    await requestGetApi(
      SKILL.GET_TYPE_SKILL("ahn479512@gmail.com", "MOSTLANGUAGE")
    ).then((res) => {
      dispatch(updateSkill(res.data));
      switch (res.status) {
        case 200: {
          updateSkill(requestGetApi, res.data);
        }
      }
    });
  };
  return (
    <S.BottomWrapper>
      <S.Title>MostLanguage</S.Title>
      <button onClick={onClick}>a</button>
    </S.BottomWrapper>
  );
};
export default BottomWrapper;
