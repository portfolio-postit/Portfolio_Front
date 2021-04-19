import * as S from "./style";
import TopWrapper from "./TopWrapper/TopWrapper";
import BottomWrapper from "./BottomWrapper/BottomWrapper";
import Qustion from "./Qustion/Question";
const About = (props) => {
  console.log(props.about.about);
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <TopWrapper />
        <BottomWrapper about={props.about.about} />
      </S.LeftWrapper>
      <Qustion />
    </S.Wrapper>
  );
};

export default About;
