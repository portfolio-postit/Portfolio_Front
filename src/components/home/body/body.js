import styled from "styled-components";

const Box = styled.div`
    height:calc(100%);
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
    height:32rem;
    width:40rem;

    display:flex;
    flex-direction:column;
    background-size:contain;
    background-repeat:no-repeat;
    background-image: url("mainPostit.png");
    align-items:center;
    justify-content:center;
    font-size: 50px;
    p{
        /* width: 60%; */
        
    }
    p:last-child{
        text-decoration: underline;
        text-underline-position: under;
    }
    @media only screen and (max-width: 768px) {
    margin-left:0;
    left:20%;
    height:100%;
    width:57%;
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