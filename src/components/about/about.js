import * as S from "./style";
import TopWrapper from "./TopWrapper/TopWrapper";
import BottomWrapper from "./BottomWrapper/BottomWrapper";
import Qustion from "./Qustion/Question";
const About = () => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <TopWrapper />
        <BottomWrapper />
      </S.LeftWrapper>
      <Qustion />
    </S.Wrapper>
  );
};

export default About;
