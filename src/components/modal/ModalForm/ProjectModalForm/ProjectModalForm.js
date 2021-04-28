import * as S from "./style";
import ModalForm from "../ModalForm";
import LaftWrapper from "./LeftWrapper/LeftWrapper";
const ProjectModalForm = (props) => {
  return (
    <ModalForm>
      <S.ProjectTitle>{props.project.project_title}</S.ProjectTitle>
      <S.Wrapper>
        <LaftWrapper />
        <S.RightWrapper>
          <S.Essential>
            <div>{props.project.period}</div>
          </S.Essential>
          <S.Essential>
            <div>개발인원: {props.project.member}명</div>
          </S.Essential>
          <S.ContentWrapper>
            <div>내용 및 특징</div>
            {props.project.comment.map((comment) => (
              <p>{comment}</p>
            ))}
          </S.ContentWrapper>
          <S.SituationWrapper>
            <div>개발 상황</div>
            <S.ProgressWrapper>
              <p>진행도</p>
              <S.Progress value={props.project.progress} max="100" />
            </S.ProgressWrapper>
            <S.ProgressWrapper>
              <p>관여도</p>
              <S.Progress value={props.project.contribution} max="100" />
            </S.ProgressWrapper>
          </S.SituationWrapper>
          <S.ContentWrapper>
            <div>기술 스택</div>
            <S.ImageWrapper>
              {props.project.skill.map((skill) => (
                <img src={process.env.REACT_APP_S3_URL + skill.file_name} />
              ))}
            </S.ImageWrapper>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <div>느낀점</div>
            {props.project.realization.map((realization) => (
              <p>{realization}</p>
            ))}
          </S.ContentWrapper>
        </S.RightWrapper>
      </S.Wrapper>
    </ModalForm>
  );
};

export default ProjectModalForm;
