import * as S from "./style";

const Header = () => {
  return (
    <S.Box>
      <S.Title>YeoungJun Ahn : 안영준</S.Title>
      <S.CustomLink to="/home">HOME</S.CustomLink>
      <S.CustomLink to="/about">ABOUT</S.CustomLink>
      <S.CustomLink to="/skill">SKILL</S.CustomLink>
      <S.CustomLink to="/project">PROJECT</S.CustomLink>
    </S.Box>
  );
};

export default Header;
