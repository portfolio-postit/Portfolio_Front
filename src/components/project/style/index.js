import styled from "styled-components";
export const Wrapper = styled.div`
  height: calc(60vw + (20vw * (${(props) => props.countProject / 3})));
  width: calc(100% - 20px);
  display: flex;
  background: #a6d5ff;
  flex-direction: column;
  border-left: 10px solid #1a0c0c;
  border-right: 10px solid #1a0c0c;
  @media only screen and (max-width: 768px) {
    height: calc(50vw + (90vw * ${(props) => props.countProject}));
  }
`;

export const ProjectList = styled.div`
  height: calc(30vw + (20vw * (${(props) => props.countProject / 3})));
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: calc(10vw + (90vw * ${(props) => props.countProject}));
  }
`;
