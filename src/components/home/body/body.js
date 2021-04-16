import * as S from "./style";

import GarabagePostit from "../postit/garbagePostit/garabagePostit";
import MainPostit from "../postit/mainPostit/mainPostit";
import SubPostit from "../postit/subPostit/subPostit";
import SkillPostit from "../postit/skillPostit/skillPostit";
import AboutPost from "../postit/aboutPostit/aboutPostit";
import ProjectPostit from "../postit/projectPostit/projectPostit";
const Body = (props) => {
  console.log(props);
  console.log(props.project);
  return (
    <>
      <S.Box>
        <S.LeftBox>
          <GarabagePostit />
          <ProjectPostit project={props.project} />
        </S.LeftBox>
        <S.RightBox>
          <MainPostit name={props.name} />
          <SubPostit />
          <SkillPostit
            url={process.env.REACT_APP_S3_URL + props.tool1.file_name}
          />
          <AboutPost email={props.email} phone_number={props.phone_number} />
        </S.RightBox>
      </S.Box>
    </>
  );
};
export default Body;
