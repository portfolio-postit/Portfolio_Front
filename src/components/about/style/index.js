import styled from "styled-components";
export const Wrapper = styled.div`
  height: 110%;
  width: 100%;
  background: #a6d5ff;
  display: flex;
`;
export const TopWrapper = styled.div`
  display: flex;
`;
export const ProjectLogo = styled.div`
  height: 12vw;
  width: 27vw;
  background-image: url("projectTitle.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 1%;
  margin-left: 5%;
  margin-bottom: 3%;
  font-size: 3.5vw;
  font-weight: 1000;
  display: table;
  @media only screen and (max-width: 768px) {
    height: 38vw;
    width: 86vw;
    font-size: 7vw;
  }
  p {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
`;

export const Introduction = styled.div`
  height: 35.1vw;
  width: 70vw;
  background-image: url("content.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;
export const Qustion = styled.div`
  margin-top: 8vw;
  height: 40vw;
  width: 25vw;
  margin-left: 3vw;
  background-image: url("question.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Questiontitle = styled.div`
  margin-top: 5.5vw;
  margin-left: 7vw;
  font-size: 2.5vw;
  font-weight: 1000;
  font-style: italic;
  transform: rotate(2deg);
  margin-bottom: 3vw;
`;
export const QuestionContent = styled.div`
  font-size: 1vw;
  margin-top: 1vw;
  margin-left: 3vw;
  transform: rotate(2deg);
`;
export const HomeLogo = styled.div`
  height: 12vw;
  margin-top: 1%;
  margin-left: 5%;
  width: 19.8vw;
  font-size: 3.5vw;
  font-weight: 1000;
  font-size: 3.5vw;
  font-weight: 1000;
  background-image: url("homeLogo.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: table;
  @media only screen and (max-width: 768px) {
    height: 0vw;
    width: 0vw;
  }
  p {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    @media only screen and (max-width: 768px) {
      font-size: 0;
    }
  }
`;
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
export const BottomWrapper = styled.div``;
export const EmailInput = styled.input`
  position: relative;
  width: 19vw;
  height: 3vw;
  background: white;
  border-radius: 30px;
  flex-direction: column;
  border: 0.1vw solid black;
  transform: rotate(3deg);
  margin-left: 3vw;
  margin-top: 1vw;
`;
export const ContentInput = styled.input`
  position: relative;
  width: 19vw;
  height: 13vw;
  background: white;
  border-radius: 30px;
  flex-direction: column;
  border: 0.1vw solid black;
  transform: rotate(3deg);
  margin-left: 2.5vw;
  margin-top: 1vw;
`;
export const SendBtn = styled.button`
  position: relative;
  width: 12vw;
  height: 3vw;
  background: white;
  border-radius: 30px;
  flex-direction: column;
  border: 0.1vw solid black;
  transform: rotate(3deg);
  margin-left: 6vw;
  margin-top: 1.5vw;
  align-items: center;
  div {
    margin-top: 0.8vw;
  }
`;
