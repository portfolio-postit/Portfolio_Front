import * as S from "./style";

const aboutPostit = (props) => {
  return (
    <S.AboutPost>
      <S.AboutTitle>ABOUT</S.AboutTitle>
      <S.AboutComment>{props.phone_number}</S.AboutComment>
      <S.AboutComment>{props.email}</S.AboutComment>
    </S.AboutPost>
  );
};

export default aboutPostit;
