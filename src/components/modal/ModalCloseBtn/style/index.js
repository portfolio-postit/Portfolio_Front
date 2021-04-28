import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  display: flex;
  top: 1vw;
  right: 1.5vw;
  width: 4vw;
  height: 4vw;
  border: none;
  background: ${(props) => `no-repeat center/80% url(${props.img}) `};

  @media only screen and (max-width: 768px) {
    width: 4vw;
    height: 4vw;
  }
  &:hover {
    cursor: pointer;
  }
`;
