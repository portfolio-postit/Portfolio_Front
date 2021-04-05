import styled from "styled-components";

const Box = styled.div`
    display:grid;
    justify-content: center;
    background:#A6D5FF;
    height:calc(100% - 40px);
    border: 10px solid #1A0C0C;
    border-top:none;
    border-bottom:none;
    grid-template-columns: 1fr 4fr;
    
`
const LeftBox = styled.div`
    display:grid;
`
const RightBox = styled.div`
    display:flex;
    `
const MainPostit = styled.div`
    margin-top:4rem;
    margin-left: -4rem;
    position: absolute;
    left: 33%;
  	transform: rotate( 5deg );
    height:32rem;
    width:40rem;
    justify-content:center;
    align-items:center;
    line-height:center;
    display:flex;
    flex-direction:column;
    background-size:cover;
    background-image: url("mainPostit.png");
    font-weight: bold;
    font-style: italic;
    font-size: 3.5rem;
    word-spacing:1rem;  
    p{
        width: 65%
    } 
    p:last-child{
        text-decoration: underline;
        text-underline-position: under;
    }
`
const ProjectPostit = styled.div`
    margin-left:3rem;
    display:flex;
    width:20rem;
    height:32.5rem;
    background-size:cover; 
    background-image: url("projectPostit.png");
`
const SubPostit = styled.div`
    display:flex;
    height:11rem;
    width:15rem;
    background-size:cover;
    background-image: url("subPostit.png");
    margin-top:3rem;
    margin-left:4rem;; 
    &:nth-child(3){
    margin-top:2rem;
    margin-left:10rem;
}
`
const SKillPostit = styled.div`
    height:8.3rem;
    width:8rem;
    display:flex;
    margin-left:5rem;
    margin-top:5rem;
    background-size:cover;
    background-image: url("skillPostit.png"); 
    &:nth-child(5){
    margin-left:2rem;
    margin-top:13rem;
    }
    &:nth-child(6){
    margin-left:-20rem;
    margin-top:230px;
    }
    &:nth-child(7){
    margin-left:40px;
    margin-top:360px;
    }
`

const AboutPost = styled.div`
    height:12rem;
    width:15.7rem;;
    display:block;
    margin-top:28rem;
    margin-left:-26rem;
    background-size:cover;
    background-image: url("aboutPostit.png");
`

const GarabagePostit = styled.div`
  	transform: rotate( 5deg );
    justify-content:center;
    align-items:center;
    line-height:center;
    margin-top:1rem;
    height:6rem;
    width:14rem;
    display:flex;
    background-size:cover;
    background-image: url("garabagePostit.png");
    margin-left:7rem;
    
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
const Body = () => {
    return (
        <>
            <Box>
                <LeftBox>
                    <GarabagePostit>
                        <p>usless thoughts </p>
                    </GarabagePostit>
                    <ProjectPostit />
                </LeftBox>
                <RightBox>
                    <MainPostit >
                        <p>HI I'm</p>
                        <p> YeoungJun</p>
                        <p> Ahn : 안영준</p>
                    </MainPostit>
                    <SubPostit />
                    <SubPostit />
                    <SKillPostit />
                    <SKillPostit />
                    <SKillPostit />
                    <SKillPostit />
                    <AboutPost />
                </RightBox>
            </Box>
        </>
    )
};
export default Body;