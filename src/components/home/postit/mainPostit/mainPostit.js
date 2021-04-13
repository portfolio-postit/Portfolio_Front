import * as S from "./style";

const mainPostit = (props) => {
  return (
    <S.MainPostit>
      <p> HI I'm</p>
      <p> YeoungJun</p>
      <p>{"Ahn: " + props.name || "안영준"}</p>
    </S.MainPostit>
  );
};

export default mainPostit;
