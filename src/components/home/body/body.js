import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { getMainSaga } from "../../../modules/redux/main";
import GarabagePostit from "../postit/garbagePostit/garabagePostit";
import MainPostit from "../postit/mainPostit/mainPostit";
import SubPostit from "../postit/subPostit/subPostit";
import SkillPostit from "../postit/skillPostit/skillPostit";

const Body = () => {
  const email = useSelector((state) => state.main.main?.about?.email);
  const name = useSelector((state) => state.main.main?.about?.username);
  const git_url = useSelector((state) => state.main.main?.about?.git_url);
  const phone_number = useSelector(
    (state) => state.main.main?.about?.phone_number
  );

  const tool = useSelector((state) => state.main.main?.tool);
  const [tool1, tool2] = tool || ["", ""];

  console.log(email);
  const dispatch = useDispatch();

  const initMainSaga = useCallback(() => {
    dispatch(getMainSaga());
  }, [dispatch]);

  useEffect(() => {
    initMainSaga();
  }, []);
  return (
    <>
      <S.Box>
        <S.LeftBox>
          <GarabagePostit />
          <S.ProjectPostit />
        </S.LeftBox>
        <S.RightBox>
          <MainPostit name={name} />
          <SubPostit />
          <SkillPostit url={process.env.REACT_APP_S3_URL + tool1.file_name} />
          <S.AboutPost>
            <S.AboutTitle>ABOUT</S.AboutTitle>
            <S.AboutComment>{phone_number}</S.AboutComment>
            <S.AboutComment>{email}</S.AboutComment>
          </S.AboutPost>
          <div class="ProjectPostit"> </div>
        </S.RightBox>
      </S.Box>
    </>
  );
};
export default Body;
