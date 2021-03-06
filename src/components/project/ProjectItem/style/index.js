import styled from "styled-components";

export const ProjectGroup = styled.div`
  display: flex;
  height: 48%;
  width: 100%;
  img {
    height: 6vw;
    width: 6.5vw;
    margin-top: 5%;
    margin-left: 10%;
    @media only screen and (max-width: 768px) {
      height: 20vw;
      width: 25vw;
    }
  }
`;
export const ProjectCotent = styled.div`
  width: calc(100% - 6vw);
  display: flex;
  flex-direction: column;
`;
export const ProjectItem = styled.div`
  margin-left: 2.5vw;
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
export const ProjectTitle = styled.div`
  font-size: 1.5vw;
  height: 2.5vw;
  font-weight: 700;
  width: 100%;
  margin-top: 1vw;
  text-align: center;

  @media only screen and (max-width: 768px) {
    height: 10vw;
    font-size: 6vw;
  }
`;

export const ProjectMember = styled.div`
  font-size: 1.2vw;
  height: 2vw;
  margin-left: 5vw;
  @media only screen and (max-width: 768px) {
    margin-left: 27vw;
    height: 8vw;
    font-size: 5vw;
  }
`;

export const Progress = styled.progress`
  width: 17vw;
  height: 1.3vw;
  margin-left: 3vw;
  margin-bottom: 1px;
  @media only screen and (max-width: 768px) {
    width: 68vw;
    height: 5.2vw;
    margin-left: 12vw;
    margin-bottom: 6px;
  }
`;

export const ProgressName = styled.div`
  margin-left: 3vw;
  height: 1.3vw;
  font-size: 1.1vw;
  @media only screen and (max-width: 768px) {
    font-size: 4.4vw;
    height: 5.2vw;
    margin-left: 12vw;
  }
`;
export const GitURL = styled.a`
  margin-top: 1vw;
  height: 1vw;
  width: 80%;
  font-size: 1.2vw;
  margin-left: 3vw;
  @media only screen and (max-width: 768px) {
    font-size: 4.8vw;
    margin-left: 12vw;
  }
`;
