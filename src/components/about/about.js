import * as S from "./style";
const About = () => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.TopWrapper>
          <S.ProjectLogo>
            <p>ABOUT</p>
          </S.ProjectLogo>
          <S.HomeLogo>
            <p>HOME</p>
          </S.HomeLogo>
        </S.TopWrapper>
        <S.BottomWrapper>
          <S.Introduction>
            <S.Image src="https://image.shutterstock.com/image-photo/competition-forest-trees-sunlight-necessary-260nw-1186179847.jpg" />
            <S.Content>
              <div>안영준</div>
              <div>이메일</div>
              <div>깃허브</div>
              <div>전화번호</div>
              <div>학력</div>
            </S.Content>
          </S.Introduction>
        </S.BottomWrapper>
      </S.LeftWrapper>
      <S.Qustion>
        <S.Questiontitle>Question</S.Questiontitle>
        <S.QuestionContent>Username or email address</S.QuestionContent>
        <S.EmailInput />
        <S.QuestionContent>Content</S.QuestionContent>
        <S.ContentInput />
        <S.SendBtn>
          <div>SEND</div>
        </S.SendBtn>
      </S.Qustion>
    </S.Wrapper>
  );
};

export default About;
