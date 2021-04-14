import styled from "styled-components";

export const ProjectPostit = styled.div`
  margin-left: 7%;
  display: flex;
  flex-direction: column;
  width: 19.6vw;
  height: calc(32vw);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("projectPostit.png");
  :hover {
    cursor: pointer;
  }
  p {
    font-size: calc(1.5vw);
    font-weight: 500;
    margin-top: 15%;
    margin-left: 38%;
    height: 10%;
    @media only screen and (max-width: 768px) {
      margin-top: 17%;
      font-weight: 1000;
      font-size: 3.5vw;
      margin-left: 33%;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 40vw;
    height: 83vw;
    margin-left: 35%;
    margin-top: 45%;
    font-size: calc(1.8vw);
  }
`;
