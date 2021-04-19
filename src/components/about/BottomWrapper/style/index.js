import styled from "styled-components";

export const BottomWrapper = styled.div`
  height: 35.1vw;
  width: 70vw;
  background-image: url("content.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 45vw;
  }
`;

export const Content = styled.div`
  height: 27vw;
  width: 34vw;
  margin-left: 3vw;
  margin-top: 2.5vw;
  display: flex;
  font-size: 2vw;
  font-weight: 700;
  flex-direction: column;
  div {
    margin-top: 1vw;
    &:after {
      content: "";
      display: block;
      width: 35vw;
      border-bottom: 3px solid black;
      margin: 0.5vw auto;
      margin-top: 1.5vw;
    }
  }
  div:nth-child(1) {
    font-size: 3vw;
  }
`;
export const Image = styled.img`
  height: 20vw;
  width: 18vw;
  margin-left: 8vw;
  margin-top: 5vw;
`;
