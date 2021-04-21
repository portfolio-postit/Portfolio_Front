import * as S from "./style";

const BottomWrapper = (props) => {
  const skill = props.skill.skill.response;
  console.log(skill);
  if (skill != null) {
    let a = "";
    a = skill.map((skill) => a + "  #" + skill.skill_name);
    const b = skill.slice(0, 5);
    console.log(b);
    return (
      <S.BottomWrapper>
        <S.Board>
          <S.Title>{props.skill.type}</S.Title>
          <S.TagWrapper>{a}</S.TagWrapper>
          {b.map((skill) => (
            <S.ProjectItem>
              <S.SkillName>{skill.skill_name}</S.SkillName>
              <S.LeftProjectItem>
                <S.Progress>
                  <S.gauge skill={skill.skill_score || 100} />
                </S.Progress>
                <S.Percent>{skill.skill_score || 100} % </S.Percent>
              </S.LeftProjectItem>
            </S.ProjectItem>
          ))}
        </S.Board>
      </S.BottomWrapper>
    );
  } else return <></>;
};
export default BottomWrapper;
