import styled from "styled-components";

export const ProjectTitle = styled.div`
  text-align: center;
  font-size: 2vw;
  margin-top: 2vw;
  font-weight: 800;
  &:after {
    content: "";
    display: block;
    width: 70vw;
    border-bottom: 3px solid black;
    margin: 0.5vw auto;
    margin-top: 1.5vw;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const RightWrapper = styled.div`
  display: flex;
  margin-left: 3vw;
  flex-direction: column;
`;
export const Essential = styled.div`
  display: flex;
  font-size: 1.5vw;
  font-weight: 700;
  margin-bottom: 1vw;
`;
export const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  font-size: 1vw;
  font-weight: 500;
  height: 6vw;
  width: 37vw;
  margin-bottom: 1vw;
  p {
    margin-top: 0.5vw;
  }
  div {
    font-size: 1.5vw;
    font-weight: 700;
  }
`;
export const SituationWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  font-size: 1vw;
  font-weight: 500;
  height: 8vw;
  width: 37vw;
  margin-bottom: 1vw;
  p {
    margin-top: 0.5vw;
  }
  div {
    font-size: 1.5vw;
    font-weight: 700;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  img {
    height: 6vw;
    width: 6.5vw;
    margin-top: 5%;
    margin-left: 10%;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  width: 37vw;
  p {
    margin-top: 1vw;
    font-size: 1vw;
    font-weight: 500;
  }
`;
export const Progress = styled.progress`
  @media only screen and (max-width: 768px) {
    width: 28vw;
  }
  margin-top: 0.5vw;
  width: 32vw;
  height: 2vw;
  margin-left: 1.5vw;
  margin-bottom: 1px;
`;
