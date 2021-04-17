import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  display: flex;
  top: 20px;
  right: 20px;
  width: 39px;
  height: 39px;
  border: none;
  background: ${(props) => `url(${props.img}) no-repeat`};

  &:hover {
    cursor: pointer;
  }
`;
