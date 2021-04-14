import styled from "styled-components";

export const ProjectPostit = styled.div`
  margin-left: 7%;
  display: flex;
  flex-direction: column;
  width: 80%;
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
  }
`;
