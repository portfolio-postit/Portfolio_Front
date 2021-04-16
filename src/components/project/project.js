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

const ProjectLogo = styled.div`
  height: 14.1vw;
  width: 32vw;
  background-image: url("projectTitle.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 2%;
  margin-left: 5%;
  margin-bottom: 3%;
  font-size: 3.5vw;
  font-weight: 1000;
  display: table;

  p {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
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
const ProjectItem = styled.div`
  display: flex;
  height: 20vw;
  width: 22.2vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("projectItem.png");
  margin-bottom: 2rem;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 80vw;
    width: 88.6vw;
  }
`;
const ProjectGroup = styled.div`
  display: flex;
  height: 48%;
  width: 100%;
  img {
    height: 6vw;
    width: 6.5vw;
    margin-top: 5%;
    margin-left: 10%;
  }
`;
const ProjectCotent = styled.div`
  width: calc(100% - 6vw);
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  font-size: 1.5vw;
  height: 2.5vw;
  font-weight: 700;
  width: 100%;
  margin-top: 1vw;
  text-align: center;
`;

const ProjectMember = styled.div`
  font-size: 1.2vw;
  height: 2vw;
  width: 100%;
  margin-left: 5vw;
  @media only screen and (max-width: 768px) {
    text-align: right;
    margin-left: 0;
  }
`;

const ProjectTag = styled.div`
  display: grid;
  font-size: 1vw;
  height: 4vw;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 2vw;
  }
  p {
    margin-left: 1vw;
  }
`;

const Progress = styled.progress`
  width: 17vw;
  height: 1.3vw;
  margin-left: 3vw;
  margin-bottom: 1px;
`;
const ProgressName = styled.div`
  margin-left: 3vw;
  height: 1.3vw;
  font-size: 1.1vw;
`;
const GitURL = styled.a`
  margin-top: 1vw;
  height: 1vw;
  width: 80%;
  font-size: 1.2vw;
  margin-left: 3vw;
`;
const project = () => {
  return (
    <Wrapper>
      <ProjectLogo>
        <p>PROJECT</p>
      </ProjectLogo>
      <ProjectList>
        <ProjectItem>
          <ProjectGroup>
            <img src="springboot.png" />
            <ProjectCotent>
              <ProjectTitle>springboot</ProjectTitle>
              <ProjectMember>member = 1</ProjectMember>
              <ProjectTag>
                <p>kotlin</p>
                <p>kotlin</p>
                <p>kotlin</p>
                <p>kotlin</p>
                <p>kotlin</p>
                <p>kotlin</p>
              </ProjectTag>
            </ProjectCotent>
          </ProjectGroup>
          <ProgressName>Progress</ProgressName>
          <Progress value="20" max="100"></Progress>
          <ProgressName>Progress</ProgressName>
          <Progress value="20" max="100"></Progress>
          <GitURL href="https://github.com/Ahnyeongjun" target="blank">
            GiT GO
          </GitURL>
        </ProjectItem>
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
