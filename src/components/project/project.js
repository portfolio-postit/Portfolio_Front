import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(90rem);
  width: calc(100% - 20px);
  display: flex;
  background: #a6d5ff;
  flex-direction: column;
  border-left: 10px solid #1a0c0c;
  border-right: 10px solid #1a0c0c;
`;

const ProjectButton = styled.div`
  height: 14.1vw;
  width: 32vw;
  background-image: url("projectTitle.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 2%;
  margin-left: 5%;
  margin-bottom: 3%;
`;

const ProjectList = styled.div`
  height: 60vw;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const ProjectItem = styled.div`
  height: 20vw;
  width: 22.2vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("projectItem.png");
  margin-bottom: 2rem;
`;

const project = () => {
  return (
    <Wrapper>
      <ProjectButton />
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
