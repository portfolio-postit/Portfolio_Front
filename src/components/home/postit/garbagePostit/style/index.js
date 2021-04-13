import styled from "styled-components";

export const GarabagePostit = styled.div`
  color: #3f3d3d;
  transform: rotate(6deg);
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  height: calc(7vw);
  width: 66%;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("garabagePostit.png");
  margin-left: 20%;

  p {
    font-size: calc(1.1vw - 0.1rem);
    margin-top: 10%;
    margin-left: 20%;
    transform: rotate(5deg);
    width: 70%;
  }
  p:after {
    content: "";
    display: block;
    width: 9vw;
    border-bottom: 1px solid #707070;
    margin: 0.5vw auto;
    margin-left: -0.2vw;
  }
  @media only screen and (max-width: 768px) {
    height: 0;
    p {
      font-size: 0;
    }
    p:after {
      width: 0;
    }
  }
`;
