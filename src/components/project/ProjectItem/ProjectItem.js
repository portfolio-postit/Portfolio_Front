import * as S from "./style";
import ProjectTag from "../ProjectTag/projectTag";
const ProjectItem = () => {
  return (
    <>
      <S.ProjectItem>
        <S.ProjectGroup>
          <img src="springboot.png" />
          <S.ProjectCotent>
            <S.ProjectTitle>springboot</S.ProjectTitle>
            <S.ProjectMember>member = 1</S.ProjectMember>
            <ProjectTag />
          </S.ProjectCotent>
        </S.ProjectGroup>
        <S.ProgressName>Progress</S.ProgressName>
        <S.Progress value="20" max="100"></S.Progress>
        <S.ProgressName>Progress</S.ProgressName>
        <S.Progress value="20" max="100"></S.Progress>
        <S.GitURL href="https://github.com/Ahnyeongjun" target="blank">
          GiT GO
        </S.GitURL>
      </S.ProjectItem>
    </>
  );
};
export default ProjectItem;
