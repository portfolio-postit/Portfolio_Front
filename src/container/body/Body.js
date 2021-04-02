import styled from "styled-components";

const Box = styled.div`
display:grid;
background:#A6D5FF;
height:calc(100% - 40px);
border: 10px solid #1A0C0C;
border-top:none;
`
const Postit = styled.div`
    display:block;
    height:100px;
    width:100px;
    background:#FFDC00;
    grid-column-start: 1;
	grid-column-end: 3;
`
const Body = () => {
    return (
        <>
            <Box>
                <Postit></Postit>
            </Box>
        </>
    )
};

export default Body;