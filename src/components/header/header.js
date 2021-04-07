import styled from "styled-components";

const Box = styled.div`
  height: 7%;
  width: 100%;
  background: #1a0c0c;
  display: flex;
  @media only screen and (max-width: 768px) {
    height: 80px;
    display: inline;
  }
`;
const Button = styled.button`
  margin-left: 3rem;
  color: white;
  border: none;
  outline: none;
  background: transparent;
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    color: #b6b6b6;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    outline: none;
    border: none;
    padding-bottom: unset;
  }
`;

const Title = styled.div`
  margin-left: 4rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-style: italic;
  background: #1a0c0c;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50px;
    margin-left: 0;
    padding: unset;
  }
`;
const Header = () => {
  return (
    <Box>
      <Title>YeoungJun Ahn : 안영준</Title>
      <Button>HOME</Button>
      <Button>ABOUT</Button>
      <Button>SKILL</Button>
      <Button>PROJECT</Button>
    </Box>
  );
};

export default Header;
