import styled from "styled-components";

const Box = styled.div`
    height:93%;
    width:calc(100% - 20px);
    display:grid;
    background:#A6D5FF;
    border-left: 10px solid #1A0C0C; 
    border-right: 10px solid #1A0C0C;
    grid-template-columns: 1fr 3fr;
    @media only screen and (max-width: 768px) {
    height:500%;
    display:flex;
    flex-direction: column
  }
`
const LeftBox = styled.div`
    display:grid;
    height:100%;
    width:100%;
    background:red;
    @media only screen and (max-width: 768px) {
    display:flex;
    height:0;
    flex-direction: column
  }
`
const RightBox = styled.div`
    display:grid;
    height:100%;
    width:100%;
     @media only screen and (max-width: 768px) {
    display:flex;
    flex-direction: column
  }
    `
const MainPostit = styled.div`
    margin-top:4%;
    position: absolute;
    left: 33%;
  	transform: rotate( 5deg );
    height:calc(30.5vw);
    width:36%;

    display:flex;
    flex-direction:column;
    background-size:contain;
    background-repeat:no-repeat;
    background-image: url("mainPostit.png");
    align-items:center;
    justify-content:center;
    font-size:3.5rem;
    p{
        width: 60%;
        font-size: calc(3.5vw);
    }
    p:last-child{
        text-decoration: underline;
        text-underline-position: under;
    }
    @media only screen and (max-width: 768px) {
    margin-left:0;

    width:55%;
    }
    `

const Body = () => {
    return (
        <>
            <Box>
                <LeftBox>

                </LeftBox>
                <RightBox>
                    <MainPostit>
                        <p> HI I'm</p>
                        <p> YeoungJun</p>
                        <p> Ahn : 안영준</p>
                    </MainPostit>
                </RightBox>
            </Box>
        </>
    )
};
export default Body;