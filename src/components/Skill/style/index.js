import styled from "styled-components";

export const Wrapper = styled.div`
  height: 120%;
  width: calc(100% - 20px);
  background: #a6d5ff;
  display: flex;
  border-left: 10px solid #1a0c0c;
  border-right: 10px solid #1a0c0c;
`;
export const LeftWrapper = styled.div`
  display: flex;
  width: 70vw;
  height: 100%;
  flex-direction: column;
`;
export const RightWrapper = styled.div`
  display: flex;
  width: 30vw;
  height: 100%;
  flex-direction: column;
  margin-left: 5vw;
`;
export const Button = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("skillPostit.png");
  margin-top: 2.5vw;
  height: 11.3vw;
  width: 11vw;
`;
export const Title = styled.div`
  font-size: 1vw;
  font-weight: 700;
  text-align: center;
  margin-top: 1vw;
`;

export const Image = styled.div``;
