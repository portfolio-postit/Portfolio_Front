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
          <S.GarabagePostit>
            <p>useless thoughts</p>
          </S.GarabagePostit>
          <S.ProjectPostit></S.ProjectPostit>
        </S.LeftBox>
        <S.RightBox>
          <S.MainPostit>
            <p> HI I'm</p>
            <p> YeoungJun</p>
            <p>{"Ahn: " + name || "안영준"}</p>
          </S.MainPostit>
          <S.SubPostit>
            <p>click on postit</p>
          </S.SubPostit>
          <S.SubPostit>
            <p>sense of responsibility</p>
          </S.SubPostit>
          <S.SKillPostit>
            <p>Tool</p>
            <img
              src={process.env.REACT_APP_S3_URL + tool1.file_name}
              class="size margin1"
            />
            <img
              src={process.env.REACT_APP_S3_URL + tool1.file_name}
              class="margin2"
              height="40%"
              width="45%"
            />
          </S.SKillPostit>
          <S.SKillPostit>
            <p>FrameWork</p>
            <img
              src={process.env.REACT_APP_S3_URL + tool1.file_name}
              class="size margin1"
            />
            <img
              src={process.env.REACT_APP_S3_URL + tool1.file_name}
              class="margin2"
              height="40%"
              width="45%"
            />
          </S.SKillPostit>
          <S.SKillPostit>
            <p>FrameWork</p>
            <img
              src={process.env.REACT_APP_S3_URL + tool1.file_name}
              class="size margin1"
            />
            <img
              src={process.env.REACT_APP_S3_URL + tool1.file_name}
              class="margin2"
              height="40%"
              width="45%"
            />
          </S.SKillPostit>
          <S.SKillPostit>
            <p>FrameWork</p>
            <img
              src={process.env.REACT_APP_S3_URL + tool1.file_name}
              class="size margin1"
            />
            <img
              src={process.env.REACT_APP_S3_URL + tool1.file_name}
              class="margin2"
              height="40%"
              width="45%"
            />
          </S.SKillPostit>
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
