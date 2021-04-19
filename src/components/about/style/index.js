import styled from "styled-components";
export const Wrapper = styled.div`
  height: 110%;
  width: 100%;
  background: #a6d5ff;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 200%;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
