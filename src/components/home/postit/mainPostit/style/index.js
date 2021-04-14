import styled from "styled-components";

export const MainPostit = styled.div`
  margin-top: 4%;
  margin-left: -7%;
  position: absolute;
  left: 33%;
  transform: rotate(5deg);
  height: calc(36.5vw);
  width: 45%;
  font-style: italic;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("mainPostit.png");
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  p {
    width: 65%;
    font-size: calc(4.7vw);
    margin-bottom: 1.5%;
  }
  p:last-child {
    text-decoration: underline;
    text-underline-position: under;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    width: 55%;
  }
`;
