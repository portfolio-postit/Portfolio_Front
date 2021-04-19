import * as S from "./style";
import ModalForm from "../ModalForm";
import LaftWrapper from "./LeftWrapper/LeftWrapper";
const ProjectModalForm = () => {
  return (
    <ModalForm>
      <S.ProjectTitle>개발하자개발하자</S.ProjectTitle>
      <S.Wrapper>
        <LaftWrapper />
        <S.RightWrapper>
          <S.Essential>
            <div>개발기간 : 2020 ~ 2020. (3개월)</div>
          </S.Essential>
          <S.Essential>
            <div>개발인원 : 4명</div>
          </S.Essential>
          <S.Free>
            <div>내용 및 특징</div>
            <p>- ~~</p>
            <p>- ~~</p>
            <p>- ~~</p>
          </S.Free>
          <S.Free>
            <div>개발 상황</div>
            <S.ProgressWrapper>
              <p>진행도</p>
              <S.Progress value="20" max="100" />
            </S.ProgressWrapper>
            <S.ProgressWrapper>
              <p>진행도</p>
              <S.Progress value="20" max="100" />
            </S.ProgressWrapper>
          </S.Free>
          <S.Free>
            <div>기술 스택</div>
            <p>- ~~</p>
            <p>- ~~</p>
            <p>- ~~</p>
          </S.Free>
          <S.Free>
            <div>느낀점</div>
            <p>- ~~</p>
            <p>- ~~</p>
            <p>- ~~</p>
          </S.Free>
        </S.RightWrapper>
      </S.Wrapper>
    </ModalForm>
  );
};

export default ProjectModalForm;
