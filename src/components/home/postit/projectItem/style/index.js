import styled from "styled-components";

export const projectTitle = styled.div`
  height: 40%;
  text-align: center;
  font-weight: 500;
  font-size: calc(1.6vw);
  margin-bottom: 5%;
  @media only screen and (max-width: 768px) {
    font-size: calc(3vw);
  }
`;
export const projectTag = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export const tag = styled.div`
  margin-left: 1%;
  white-space: pre;
  font-weight: 100%;
  height: 20%;
  font-size: 1vw;
  :nth-child(2) {
    margin-top: calc(2vw);
    margin-left: -60%;
  }
  :nth-child(4) {
    margin-top: 45%;
    margin-left: -70%;
  }
  @media only screen and (max-width: 1280px) {
    width: 0;
    height: 0;
  }
`;
export const wrapper = styled.div`
  height: 18%;
  width: 80%;
  margin-bottom: 5%;
  margin-left: 13%;
  display: flex;
  flex-direction: column;
`;
