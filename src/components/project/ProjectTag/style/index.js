import styled from "styled-components";
export const ProjectTag = styled.div`
  display: grid;
  font-size: 1vw;
  height: 4vw;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 16vw;
    font-size: 4vw;
  }
  p {
    margin-left: 1vw;
  }
`;
