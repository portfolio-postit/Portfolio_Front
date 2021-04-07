import * as S from "./style";
const Body = () => {
  return (
    <>
      <S.Box>
        <S.LeftBox>
          <S.GarabagePostit>
            <p>useless thoughts</p>
          </S.GarabagePostit>
          <S.ProjectPostit />
        </S.LeftBox>
        <S.RightBox>
          <S.MainPostit>
            <p> HI I'm</p>
            <p> YeoungJun</p>
            <p> Ahn : 안영준</p>
          </S.MainPostit>
          <S.SubPostit>
            <p>click on postit</p>
          </S.SubPostit>
          <S.SubPostit>
            <p>sense of responsibility</p>
          </S.SubPostit>
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
          <div class="ProjectPostit" />
        </S.RightBox>
      </S.Box>
    </>
  );
};
export default Body;
