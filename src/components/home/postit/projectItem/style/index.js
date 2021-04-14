import styled from "styled-components";

export const projectTitle = styled.div`
  height: 40%;
  text-align: center;
  font-weight: 500;
  font-size: calc(1.6vw);
  margin-bottom: 5%;
`;
export const projectTag = styled.div`
  display: flex;
  width: 100%;
`;
export const tag = styled.div`
  font-weight: 50;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: -2%;
  font-size: calc(1.1vw - 0.4rem);

  &:nth-child(2) {
    margin-left: -15%;
    margin-top: 15%;
  }
  &:nth-child(3) {
    margin-left: -15%;
  }
  &:nth-child(4) {
    margin-top: 10%;
    margin-left: -10%;
  }
`;
export const wrapper = styled.div`
  height: 18%;
  width: 80%;
  margin-bottom: 5%;
  margin-left: 13%;
  display: flex;
  flex-direction: column;
  /* background-color: black; */
`;
