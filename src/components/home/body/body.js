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
    display:flex;
    height:100%;
    width:100%;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
    height:0;
  }
`

const RightBox = styled.div`
    display:flex;
    height:100%;
    width:100%;
    
    .ProjectPostit{ 
        @media only screen and (max-width: 768px) {
        margin-top:calc(40.5vw);
        margin-left:3rem;
        position: absolute;
        left:22%;
        display:flex;
        height:calc(65vw);
        width:40%;
        background-size:cover;
        background-image: url("projectPostit.png");
    }}
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
const ProjectPostit = styled.div`
    margin-left:7%;
    display:flex;
    width:80%;
    height:calc(32vw);
    background-repeat:no-repeat;
    background-size:cover; 
    background-image: url("projectPostit.png");
`

const GarabagePostit = styled.div`
  	transform: rotate( 5deg );
    justify-content:center;
    align-items:center;
    line-height:center;
    margin-top:2%;
    height:calc(7vw);
    width:66%;
    display:flex;
    background-repeat:no-repeat;
    background-size:cover;
    background-image: url("garabagePostit.png");
    margin-left:20%;
    
    p{
        margin-top:1rem;
        transform: rotate( 5deg );
        width: 47%;
        font-size:0.9rem;
    }
    p:after {
        content: "";
        display: block;
        width: 7rem;
        border-bottom: 1px solid #707070;
        margin: 10px auto;
}
`
const SubPostit = styled.div`
    display:flex;
    height:calc(13vw);
    width:23%;
    background-size:cover;
    background-image: url("subPostit.png");
    margin-top:2%;
    margin-left:4%;; 
    &:nth-child(3){
    margin-top:3%;
    margin-left:13%;
}
`
const Body = () => {
    return (
        <>
            <Box>
                <LeftBox>
                    <GarabagePostit />
                    <ProjectPostit />
                </LeftBox>
                <RightBox>
                    <MainPostit>
                        <p> HI I'm</p>
                        <p> YeoungJun</p>
                        <p> Ahn : 안영준</p>
                    </MainPostit>
                    <SubPostit/>    
                    <SubPostit/>

                    <div class="ProjectPostit" />

                </RightBox>
            </Box>
        </>
    )
};
export default Body;