import styled from "styled-components";
export const Wrapper = styled.div`
  height: 110%;
  width: calc(100% - 20px);
  background: #a6d5ff;
  display: flex;
  border-left: 10px solid #1a0c0c;
  border-right: 10px solid #1a0c0c;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 200%;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
