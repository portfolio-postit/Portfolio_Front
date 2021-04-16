import * as S from "./style";
import ProjectLogo from "./ProjectLogo/projectLogo";
import ProjectItem from "./ProjectItem/ProjectItem";

const project = () => {
  return (
    <S.Wrapper>
      <ProjectLogo />
      <S.ProjectList>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </S.ProjectList>
    </S.Wrapper>
  );
};
export default project;
