import * as S from "./style";
import ProjectItem from "./ProjectItem/ProjectItem";
import TopWrapper from "./TopWrapper/TopWrapper";
const Project = () => {
  return (
    <S.Wrapper countProject="7">
      <TopWrapper />
      <S.ProjectList>
        <ProjectItem />
      </S.ProjectList>
    </S.Wrapper>
  );
};
export default Project;
