import styled from "styled-components";
// import mainPostit from '../../../public/

const Box = styled.div`
    display:grid;
    justify-content: center;
    background:#A6D5FF;
    height:calc(100% - 40px);
    border: 10px solid #1A0C0C;
    border-top:none;
    grid-template-columns: 1fr 3fr;
`
const LeftBox = styled.div`
    display:grid;
    background:white;
`
const RightBox = styled.div`
    display:flex;
    background:seashell;
`
const MainPostit = styled.div`
    margin-top:80px;
    position: absolute;
    left: 33%;
  	transform: rotate( 5deg );
    height:400px;
    width:500px;
    justify-content:center;
    align-items:center;
    line-height:center;
    display:flex;
    flex-direction:column;
    background-size:cover;
    background-image: url("mainPostit.png");
    font-weight: bold;
    font-style: italic;
    font-size: 50px;
    word-spacing:10px;  
    p{
        width: 65%
    } 
    p:last-child{
        text-decoration: underline;
        text-underline-position: under;
    }
`
const ProjectPostit = styled.div`
    display:flex;
    height:600px;
    background:bl;
`
const GarabgPostit = styled.div`
    display:flex;
    height:200px;
    width:200px;
    background:black;
    margin-top:50px;
    margin-left:70px; 
    &:nth-child(3){
    margin-top:30px;
    margin-left:200px;
    height:170px; 
}
`

const SKillPostit = styled.div`
    height:150px;
    width:150px;
    display:flex;
    margin-left:50px;
    margin-top:50px;
    background:blue;
    &:nth-child(5){
    margin-left:10px;
    margin-top:180px;
    }
    &:nth-child(6){
    margin-left:-410px;
    margin-top:230px;
    }
    &:nth-child(7){
    margin-left:40px;
    margin-top:360px;
    }
`

const AboutPost = styled.div`
    height:150px;
    width:250px;
    display:block;
    background:black;
    margin-top:450px;
    margin-left:-450px;
`

const Body = () => {
    return (
        <>
            <Box>
                <LeftBox>
                    a
                    </LeftBox>
                <RightBox>
                    <MainPostit >
                        <p>HI I'm</p>
                        <p> YeoungJun</p>
                        <p> Ahn : 안영준</p>
                    </MainPostit>
                    <GarabgPostit />
                    <GarabgPostit />
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