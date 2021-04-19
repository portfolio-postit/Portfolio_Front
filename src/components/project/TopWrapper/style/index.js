import styled from "styled-components";

export const ProjectLogo = styled.div`
  height: 14.2vw;
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
  @media only screen and (max-width: 768px) {
    height: 38vw;
    width: 86vw;
    font-size: 7vw;
  }
  p {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
`;

export const HomeLogo = styled.div`
  height: 14.1vw;
  margin-top: 2%;
  margin-left: 5%;
  width: 23.4vw;
  font-size: 3.5vw;
  font-weight: 1000;
  font-size: 3.5vw;
  font-weight: 1000;
  background-image: url("homeLogo.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: table;
  @media only screen and (max-width: 768px) {
    height: 0vw;
    width: 0vw;
  }
  p {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    @media only screen and (max-width: 768px) {
      font-size: 0;
    }
  }
`;
