import styled from "styled-components";


const Box = styled.div`
    height:40px;
    background: #1A0C0C;
    display:grid;
    grid-template-columns:2fr 1fr 1fr 1fr 1fr 5fr;
`
const Button = styled.button`
    color:white;
    border:none;
    outline:none;
    background:transparent;
    font-weight: bold;
&:hover{
    color:#B6B6B6;
}
`

const Title = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-weight: bold;
    font-style: italic;
`
const Header = () => {



    return (
        <Box>
            <Title>
                YeoungJun Ahn : 안영준
            </Title>
            <Button>
                HOME
            </Button>
            <Button>
                ABOUT
            </Button>
            <Button>
                SKILL
            </Button>
            <Button>
                PROJECT
            </Button>
        </Box>
    )
};

export default Header;
