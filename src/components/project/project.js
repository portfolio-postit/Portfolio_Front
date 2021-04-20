import * as S from "./style";
import ProjectItem from "./ProjectItem/ProjectItem";
import TopWrapper from "./TopWrapper/TopWrapper";
const Project = (props) => {
  const project = props.project.project;
  let length = 0;
  if (project != null) {
    length = project.length;
    return (
      <S.Wrapper countProject={length}>
        <TopWrapper />
        <S.ProjectList>
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
