import styled from "styled-components";

const Box = styled.div`
  height: 93%;
  width: calc(100% - 20px);
  display: grid;
  background: #a6d5ff;
  border-left: 10px solid #1a0c0c;
  border-right: 10px solid #1a0c0c;
  grid-template-columns: 1fr 3fr;
  @media only screen and (max-width: 768px) {
    height: calc(80% + 40vw);
    display: flex;
    flex-direction: column;
  }
`;
const LeftBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 0;
  }
`;

const RightBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .ProjectPostit {
    @media only screen and (max-width: 768px) {
      margin-top: calc(40.5vw);
      margin-left: 3rem;
      position: absolute;
      left: 26%;
      display: flex;
      height: calc(65vw);
      width: 40%;
      background-size: cover;
      background-image: url("projectPostit.png");
    }
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const MainPostit = styled.div`
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
  p {
    width: 65%;
    font-size: calc(4.7vw);
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
const ProjectPostit = styled.div`
  margin-left: 7%;
  display: flex;
  width: 80%;
  height: calc(32vw);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("projectPostit.png");
`;

const GarabagePostit = styled.div`
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
const SubPostit = styled.div`
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
const SKillPostit = styled.div`
  display: flex;
  flex-direction: column;
  height: 9.9vw;
  width: 13%;
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
    margin-left: 4%;
    margin-top: 30%;
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
    margin-left: 23%;
    margin-top: 7%;
    @media only screen and (max-width: 768px) {
      margin-left: 20%;
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
`;
const AboutPost = styled.div`
  height: 17vw;
  width: 30%;
  display: block;
  margin-top: 35%;
  margin-left: -43%;
  background-size: cover;
  background-image: url("aboutPostit.png");
  @media only screen and (max-width: 768px) {
    margin-top: calc(5.5vw);
    margin-left: 0;
    height: 23vw;
  }
`;
const Body = () => {
  return (
    <>
      <Box>
        <LeftBox>
          <GarabagePostit>
            <p>useless thoughts</p>
          </GarabagePostit>
          <ProjectPostit />
        </LeftBox>
        <RightBox>
          <MainPostit>
            <p> HI I'm</p>
            <p> YeoungJun</p>
            <p> Ahn : 안영준</p>
          </MainPostit>
          <SubPostit>
            <p>click on postit</p>
          </SubPostit>
          <SubPostit>
            <p>sense of responsibility</p>
          </SubPostit>
          <SKillPostit>
            <p>FrameWork</p>
            <img src="react.png" class="size margin1" />
            <img
              src="springboot.png"
              class="margin2"
              height="40%"
              width="45%"
            />
          </SKillPostit>
          <SKillPostit>
            <p>FrameWork</p>
            <img src="react.png" class="size margin1" />
            <img
              src="springboot.png"
              class="margin2"
              height="40%"
              width="45%"
            />
          </SKillPostit>
          <SKillPostit>
            <p>FrameWork</p>
            <img src="react.png" class="size margin1" />
            <img
              src="springboot.png"
              class="margin2"
              height="40%"
              width="45%"
            />
          </SKillPostit>
          <SKillPostit>
            <p>FrameWork</p>
            <img src="react.png" class="size margin1" />
            <img
              src="springboot.png"
              class="margin2"
              height="40%"
              width="45%"
            />
          </SKillPostit>
          <AboutPost />
          <div class="ProjectPostit" />
        </RightBox>
      </Box>
    </>
  );
};
export default Body;
