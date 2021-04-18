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
  display: grid;
  grid-template-rows: 3fr 1fr;
`;

const Image = styled.img`
  height: 20vw;
  width: 30vw;
  margin-left: 5vw;
  margin-top: 2vw;
`;
const Content = styled.div`
  margin-top: 5vw;
  font-size: 1.5vw;
  font-weight: 700;
  margin-left: 5vw;
`;
const Link = styled.a`
  margin-left: 6vw;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
        <RightWrapper></RightWrapper>
      </Wrapper>
    </ModalForm>
  );
};

export default ProjectModalForm;
