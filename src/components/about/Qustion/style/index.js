import styled from "styled-components";

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
