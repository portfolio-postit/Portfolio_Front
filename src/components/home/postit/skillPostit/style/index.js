import styled from "styled-components";

export const SKillPostit = styled.div`
  display: flex;
  flex-direction: column;
  height: 10.7vw;
  width: 14%;
  display: flex;
  margin-left: 5%;
  margin-top: 5%;
  background-size: cover;
  background-image: url("skillPostit.png");
  &:nth-child(5) {
    margin-left: 2%;
    margin-top: calc(10% + 1vw);
    @media only screen and (max-width: 768px) {
      margin-top: calc(1vw);
      margin-left: 0;
    }
  }
  &:nth-child(6) {
    margin-left: -30%;
    margin-top: 20%;
    @media only screen and (max-width: 768px) {
      margin-top: calc(1vw);
      margin-left: 0;
    }
  }
  &:nth-child(7) {
    margin-left: 3%;
    margin-top: 28%;
    @media only screen and (max-width: 768px) {
      margin-top: calc(1vw);
    }
  }
  @media only screen and (max-width: 768px) {
    height: 15vw;
    width: 15%;
  }
  .size {
    height: 40%;
    width: 40%;
  }
  p {
    font-size: calc(1vw);
    font-weight: 500;
    margin-left: calc(2vw);
    margin-top: 7%;
    &.margin40 {
      margin-left: 40%;
    }

    @media only screen and (max-width: 768px) {
      margin-left: 10%;
      font-size: calc(1.8vw);
    }
  }
  .margin1 {
    margin-top: 7%;
    margin-left: 15%;
  }
  .margin2 {
    margin-top: -7%;
    margin-left: 45%;
  }
  :hover {
    cursor: pointer;
  }
`;
