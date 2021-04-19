import styled from "styled-components";
const Wrapper = styled.div`
  height: 105%;
  width: 100%;
  background: #a6d5ff;
  display: flex;
`;
const TopWrapper = styled.div`
  display: flex;
`;
const ProjectLogo = styled.div`
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

const Introduction = styled.div`
  height: 35.1vw;
  width: 70vw;
  background-image: url("content.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;
const Qustion = styled.div`
  margin-top: 8vw;
  height: 40vw;
  width: 25vw;
  margin-left: 3vw;
  background-image: url("question.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Questiontitle = styled.div`
  margin-top: 5.5vw;
  margin-left: 7vw;
  font-size: 2.5vw;
  font-weight: 1000;
  font-style: italic;
  transform: rotate(2deg);
  margin-bottom: 3vw;
`;
const QuestionContent = styled.div`
  font-size: 1vw;
  margin-top: 1vw;
  margin-left: 3vw;
  transform: rotate(2deg);
`;
const HomeLogo = styled.div`
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
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
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
const Image = styled.img`
  height: 20vw;
  width: 18vw;
  margin-left: 8vw;
  margin-top: 5vw;
`;
const BottomWrapper = styled.div``;
const EmailInput = styled.input`
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
const ContentInput = styled.input`
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
const SendBtn = styled.button`
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
const About = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <TopWrapper>
          <ProjectLogo>
            <p>ABOUT</p>
          </ProjectLogo>
          <HomeLogo>
            <p>HOME</p>
          </HomeLogo>
        </TopWrapper>
        <BottomWrapper>
          <Introduction>
            <Image src="https://image.shutterstock.com/image-photo/competition-forest-trees-sunlight-necessary-260nw-1186179847.jpg" />
            <Content>
              <div>안영준</div>
              <div>이메일</div>
              <div>깃허브</div>
              <div>전화번호</div>
              <div>학력</div>
            </Content>
          </Introduction>
        </BottomWrapper>
      </LeftWrapper>
      <Qustion>
        <Questiontitle>Question</Questiontitle>
        <QuestionContent>Username or email address</QuestionContent>
        <EmailInput />
        <QuestionContent>Content</QuestionContent>
        <ContentInput />
        <SendBtn>
          <div>SEND</div>
        </SendBtn>
      </Qustion>
    </Wrapper>
  );
};

export default About;
