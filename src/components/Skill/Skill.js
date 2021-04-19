import styled from "styled-components";
import BottomWrapper from "./BottomWrapper/BottomWrapper";
import TopWrapper from "./TopWrapper/TopWrapper";
import SkillItem from "./SkillItem/SkillItem";
const Skill = () => {
  const Wrapper = styled.div`
    height: 110%;
    width: 100%;
    background: #a6d5ff;
    display: flex;
  `;
  const LeftWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
  `;

  const SkillList = styled.div`
    margin-top: 3vw;
    margin-left: 2vw;
    height: 30vw;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;

  return (
    <Wrapper>
      <LeftWrapper>
        <TopWrapper />
        <BottomWrapper />
      </LeftWrapper>
      <SkillList>
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </SkillList>
    </Wrapper>
  );
};
export default Skill;
