import styled from "styled-components";

export const Wrapper = styled.div`
  height: 2vw;
  width: 100%;
  background: #1a0c0c;

  @media only screen and (max-width: 768px) {
    height: 3vw;
  }
`;

export const Copyright = styled.div`
  height: 1vw;
  color: white;
  font-size: 0.5vw;
  margin-left: 1vw;
  padding-top: 0.5vw;
  @media only screen and (max-width: 768px) {
    margin-left: 2vw;
  }
`;
