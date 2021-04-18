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
  display: flex;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
        <LeftWrapper></LeftWrapper>
        <RightWrapper></RightWrapper>
      </Wrapper>
    </ModalForm>
  );
};

export default ProjectModalForm;
