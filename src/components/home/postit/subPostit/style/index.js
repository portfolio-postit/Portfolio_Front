import styled from "styled-components";

export const SubPostit = styled.div`
  display: flex;
  height: calc(13vw);
  width: 23%;
  background-size: cover;
  background-image: url("subPostit.png");
  margin-top: 2%;
  margin-left: 4%;
  flex-direction: column;
  align-items: center;
  line-height: -10%;
  font-size: 1.4vw;

  &:nth-child(3) {
    margin-top: 3%;
    margin-left: 13%;
  }

  p {
    color: #3f3d3d;
    margin-top: 10px;
    margin-left: 1vw;

    @media only screen and (max-width: 768px) {
      font-size: 0px;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 0;
  }
`;
