import styled from "styled-components";

export const AboutPost = styled.div`
  height: 17vw;
  width: 30%;
  display: block;
  margin-top: 35%;
  margin-left: -40%;
  background-size: cover;
  background-image: url("aboutPostit.png");
  @media only screen and (max-width: 768px) {
    margin-top: calc(5.5vw);
    margin-left: 0;
    height: 23vw;
  }
  :hover {
    cursor: pointer;
  }
`;

export const AboutTitle = styled.div`
  font-size: calc(2vw);
  margin-top: 15%;
  margin-left: 30%;
  transform: rotate(2deg);
  &:after {
    content: "";
    display: block;
    width: 14vw;
    border-bottom: 1px solid #707070;
    margin: 0.5vw auto;
    margin-left: -2vw;
  }
  @media only screen and (max-width: 768px) {
    font-size: calc(3vw);
  }
`;
export const AboutComment = styled.div`
  margin-top: 5%;
  margin-left: 10%;
  display: inline-block;
  font-size: calc(1.5vw);
  transform: rotate(2deg);
  &:after {
    content: "";
    display: block;
    width: 16vw;
    border-bottom: 1px solid #707070;
    margin: 0.5vw auto;
    margin-left: -0.2vw;
  }
  @media only screen and (max-width: 768px) {
    font-size: calc(2vw);
    &:after {
      width: 23vw;
    }
  }
`;
