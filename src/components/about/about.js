import styled from "styled-components";
const Wrapper = styled.div`
  height: 97%;
  width: 100%;
  background: #a6d5ff;
  display: flex;
`;
const TopWrapper = styled.div`
  display: flex;
`;
const ProjectLogo = styled.div`
  height: 12vw;
  width: 30vw;
  background-color: black;
  /* background-image: url("projectTitle.png"); */
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

const Big = styled.div`
  height: 30vw;
  width: 60vw;
  background-color: black;

  /* background-image: url("big.png"); */
  background-repeat: no-repeat;
  background-size: cover;
`;
const Qustion = styled.div`
  background-color: black;
  height: 40vw;
  width: 20vw;
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
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const BottomWrapper = styled.div``;
const About = () => {
  return (
    <Wrapper>
      <Content>
        <TopWrapper>
          <ProjectLogo>
            <p>ABOUT</p>
          </ProjectLogo>
          <HomeLogo>
            <p>HOME</p>
          </HomeLogo>
        </TopWrapper>
        <BottomWrapper>
          <Big></Big>
        </BottomWrapper>
      </Content>
      <Qustion />
    </Wrapper>
  );
};

export default About;
