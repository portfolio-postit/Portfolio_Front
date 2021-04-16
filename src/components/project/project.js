import styled from "styled-components";
import ProjectLogo from "./ProjectLogo/projectLogo";
import ProjectItem from "./ProjectItem/ProjectItem";
const Wrapper = styled.div`
  height: calc(90rem);
  width: calc(100% - 20px);
  display: flex;
  background: #a6d5ff;
  flex-direction: column;
  border-left: 10px solid #1a0c0c;
  border-right: 10px solid #1a0c0c;
`;

const ProjectList = styled.div`
  height: 60vw;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const project = () => {
  return (
    <Wrapper>
      <ProjectLogo />
      <ProjectList>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </ProjectList>
    </Wrapper>
  );
};
export default project;
