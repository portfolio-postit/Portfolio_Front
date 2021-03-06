import styled from "styled-components";

export const Box = styled.div`
  height: 93%;
  width: calc(100% - 20px);
  display: grid;
  background: #a6d5ff;
  border-left: 10px solid #1a0c0c;
  border-right: 10px solid #1a0c0c;
  grid-template-columns: 1fr 3fr;
  @media only screen and (max-width: 768px) {
    height: calc(80% + 35vw);
    display: flex;
    flex-direction: column;
  }
`;
export const LeftBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 0;
  }
`;

export const RightBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
