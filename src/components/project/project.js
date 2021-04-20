import * as S from "./style";
import ProjectItem from "./ProjectItem/ProjectItem";
import TopWrapper from "./TopWrapper/TopWrapper";
const Project = (props) => {
  const project = props.project.project;
  if (project != null) {
    return (
      <S.Wrapper countProject={project.length}>
        <TopWrapper />
        <S.ProjectList countProject={project.length}>
          {project.map((project) => (
            <ProjectItem project={project} />
          ))}
        </S.ProjectList>
      </S.Wrapper>
    );
  }
  return <></>;
};
export default Project;
