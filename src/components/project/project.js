import * as S from "./style";
import Logo from "./ProjectLogo/projectLogo";
import ProjectItem from "./ProjectItem/ProjectItem";

const Project = () => {
  return (
    <S.Wrapper countProject="7">
      <Logo />
      <S.ProjectList>
        <ProjectItem />
      </S.ProjectList>
    </S.Wrapper>
  );
};
export default Project;
