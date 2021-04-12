import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { MAIN } from "../../../lib/API";
import { requestGetApi } from "../../../lib/REQUEST";
import { getMainSaga } from "../../../modules/redux/main";
import axios from "axios";

const Body = () => {
  // const res = await axios.patch(
  //   "http://52.78.215.67:8080/user",
  //   {},
  //   {
  //     headers: {
  //       Authorization:accessToken
  //     },
  //   }
  // );
  // console.log(res.status);

  // const email = useSelector((state) => state.main.main.about);
  const email = useSelector((state) => state.main.main?.about?.email);
  const name = useSelector((state) => state.main.main?.about?.username);
  // const [tool, tool2] = useSelector((state) => state.main.main?.tool);
  const tool = useSelector((state) => state.main.main?.tool);
  const dispatch = useDispatch();

  const [tool1, tool2] = tool || ["", ""];

  const tool12 = process.env.REACT_APP_S3_URL + tool1.file_name;
  console.log(tool12);
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
          <S.GarabagePostit>
            <p>useless thoughts</p>
          </S.GarabagePostit>
          <S.ProjectPostit></S.ProjectPostit>
        </S.LeftBox>
        <S.RightBox>
          <S.MainPostit>
            <p> HI I'm</p>
            <p> YeoungJun</p>
            <p>{name || "SEX"}</p>
          </S.MainPostit>
          <S.SubPostit>
            <p>click on postit</p>
          </S.SubPostit>
          <S.SubPostit>
            <p>sense of responsibility</p>
          </S.SubPostit>
          <S.SKillPostit>
            <p>Tool</p>
            <img src={tool12} class="size margin1" />
            <img
              src="springboot.png"
              class="margin2"
              height="40%"
              width="45%"
            />
          </S.SKillPostit>
          <S.SKillPostit>
            <p>FrameWork</p>
            <img src="react.png" class="size margin1" />
            <img
              src="springboot.png"
              class="margin2"
              height="40%"
              width="45%"
            />
          </S.SKillPostit>
          <S.SKillPostit>
            <p>FrameWork</p>
            <img src="react.png" class="size margin1" />
            <img
              src="springboot.png"
              class="margin2"
              height="40%"
              width="45%"
            />
          </S.SKillPostit>
          <S.SKillPostit>
            <p>FrameWork</p>
            <img src="react.png" class="size margin1" />
            <img
              src="springboot.png"
              class="margin2"
              height="40%"
              width="45%"
            />
          </S.SKillPostit>
          <S.AboutPost>
            <S.AboutTitle>ABOUT</S.AboutTitle>
            <S.AboutComment>010-7670-3833</S.AboutComment>
            <S.AboutComment>ahn479512@gmail.com</S.AboutComment>
          </S.AboutPost>
          <div class="ProjectPostit"> </div>
        </S.RightBox>
      </S.Box>
    </>
  );
};
export default Body;
