import * as S from "./style";

import GarabagePostit from "../postit/garbagePostit/garabagePostit";
import MainPostit from "../postit/mainPostit/mainPostit";
import SubPostit from "../postit/subPostit/subPostit";
import SkillPostit from "../postit/skillPostit/skillPostit";
import AboutPost from "../postit/aboutPostit/aboutPostit";
const Body = (props) => {
  console.log(props);
  return (
    <>
      <S.Box>
        <S.LeftBox>
          <GarabagePostit />
          <S.ProjectPostit />
        </S.LeftBox>
        <S.RightBox>
          <MainPostit name={props.name} />
          <SubPostit />
          <SkillPostit
            url={process.env.REACT_APP_S3_URL + props.tool1.file_name}
          />
          <AboutPost email={props.email} phone_number={props.phone_number} />
          <div class="ProjectPostit"> </div>
        </S.RightBox>
      </S.Box>
    </>
  );
};
export default Body;
