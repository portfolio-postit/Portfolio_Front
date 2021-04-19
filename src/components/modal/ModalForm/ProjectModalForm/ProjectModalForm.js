import * as S from "./style";
import styled from "styled-components";
import ModalForm from "../ModalForm";

const ProjectTitle = styled.div`
  text-align: center;
  font-size: 2vw;
  margin-top: 2vw;
  font-weight: 800;
  &:after {
    content: "";
    display: block;
    width: 70vw;
    border-bottom: 3px solid black;
    margin: 0.5vw auto;
    margin-top: 1.5vw;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 20vw;
  width: 30vw;
  margin-left: 5vw;
  margin-top: 1vw;
`;
const Content = styled.div`
  height: 2vw;
  margin-top: 7vw;
  font-size: 1.5vw;
  font-weight: 700;
  margin-left: 5vw;
`;
const Link = styled.a`
  margin-left: 6vw;
  font-size: 1vw;
`;
const RightWrapper = styled.div`
  display: flex;
  margin-left: 3vw;
  margin-top: 1vw;
  flex-direction: column;
`;
const Essential = styled.div`
  display: flex;
  font-size: 1.5vw;
  font-weight: 700;
  margin-bottom: 1vw;
`;
const Free = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  font-weight: 500;
  margin-bottom: 1vw;
  p {
    margin-top: 0.5vw;
  }
  div {
    font-size: 1.5vw;
    font-weight: 700;
  }
`;
const ProgressWrapper = styled.div`
  display: flex;
  p {
    margin-top: 1vw;
    font-size: 1vw;
    font-weight: 500;
  }
`;
const Progress = styled.progress`
  margin-top: 0.5vw;
  width: 30vw;
  height: 2vw;
  margin-left: 1.5vw;
  margin-bottom: 1px;
`;
const ProjectModalForm = () => {
  return (
    <ModalForm>
      <ProjectTitle>개발하자개발하자</ProjectTitle>
      <Wrapper>
        <LeftWrapper>
          <Image src="https://image.shutterstock.com/image-photo/competition-forest-trees-sunlight-necessary-260nw-1186179847.jpg" />
          <Content>관련 링크</Content>
          <Link href="https://github.com/Ahnyeongjun" target="blank">
            https://github.com/Ahnyeongjun
          </Link>
        </LeftWrapper>
        <RightWrapper>
          <Essential>
            <div>개발기간 : 2020 ~ 2020. (3개월)</div>
          </Essential>
          <Essential>
            <div>개발인원 : 4명</div>
          </Essential>
          <Free>
            <div>내용 및 특징</div>
            <p>- ~~</p>
            <p>- ~~</p>
            <p>- ~~</p>
          </Free>
          <Free>
            <div>개발 상황</div>
            <ProgressWrapper>
              <p>진행도</p>
              <Progress value="20" max="100" />
            </ProgressWrapper>
            <ProgressWrapper>
              <p>진행도</p>
              <Progress value="20" max="100" />
            </ProgressWrapper>
          </Free>
          <Free>
            <div>기술 스택</div>
            <p>- ~~</p>
            <p>- ~~</p>
            <p>- ~~</p>
          </Free>
          <Free>
            <div>느낀점</div>
            <p>- ~~</p>
            <p>- ~~</p>
            <p>- ~~</p>
          </Free>
        </RightWrapper>
      </Wrapper>
    </ModalForm>
  );
};

export default ProjectModalForm;
