import * as S from "./style";
import ProjectItem from "../projectItem/projectItem";

const projectPostit = (props) => {
  const [project1, project2] = props.project || ["", ""];
  return (
    <S.ProjectPostit>
      <p>PROJECT</p>
      <ProjectItem project={project1} />
      <ProjectItem project={project1} />
      <ProjectItem project={project2} />
    </S.ProjectPostit>
  );
};
export default projectPostit;
