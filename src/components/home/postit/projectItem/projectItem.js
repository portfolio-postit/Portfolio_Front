import * as S from "./style";

const projectItem = (props) => {
  const [tag1, tag2] = props.project.tag || ["", ""];
  console.log(tag1);
  return (
    <S.wrapper>
      <S.projectTitle>{props.project.project_title}</S.projectTitle>
      <S.projectTag>
        <S.tag>안녕하세요</S.tag>
        <S.tag>안녕하세요</S.tag>
        <S.tag>안녕하세요</S.tag>
        <S.tag>안녕하세요</S.tag>
      </S.projectTag>
    </S.wrapper>
  );
};
export default projectItem;
