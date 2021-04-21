import styled from "styled-components";

export const BottomWrapper = styled.div`
  height: 37.1vw;
  width: 70vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 45vw;
  }
`;
export const Board = styled.div`
  width: 69.2vw;
  height: 40vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("board.png");
`;

export const Title = styled.div`
  font-size: 2.5vw;
  font-weight: 700;
  margin-top: 5vw;
  margin-left: 8vw;
  width: 45vw;
`;

export const ProjectItem = styled.div`
  display: flex;
  margin-bottom: 1vw;
  flex-direction: column;
  margin-left: 8vw;
`;
export const LeftProjectItem = styled.div`
  display: flex;
`;
export const SkillName = styled.div`
  margin-bottom: 0.5vw;
  font-size: 1.5vw;
  margin-right: 0.5vw;
`;
export const Progress = styled.span`
  display: inline-block;
  height: 2vw;
  background-color: white;
  width: 48vw;
  border-radius: 10px;
`;

export const Percent = styled.div`
  margin-left: 1vw;
  font-size: 1vw;
  margin-top: 0.3vw;
`;

export const gauge = styled.span`
  display: inline-block;
  width: ${(props) => props.skill}%;
  height: 2vw;
  background-color: black;
  border-radius: 10px;
`;
export const TagWrapper = styled.div`
  font-size: 1.3vw;
  display: flex;
  height: 4vw;
  width: 55vw;
  margin-left: 8vw;
  margin-top: 2vw;
  word-break: break-all;
`;
export const Tag = styled.div`
  height: 2vw;
  width: 30vw;
  background: black;
  margin-left: 1vw;
`;
