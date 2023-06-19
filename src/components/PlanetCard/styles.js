import styled from "styled-components";

const StyledInfo= styled.div`

    width: 85%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

`;

const StyledContainer = styled.div`
    position: relative;
    margin-top: 90px;
`;
const StyledImages = styled.img`
     width: 400px;
`
const StyledPosition = styled.img`

    position: absolute;
    width: 50%;
    height: 129px;
    left: 100px;
    top: 357px;

`;

const StyledText = styled.div`
    width: 350px;
    margin-top: 90px;
`;

const StyledH1 = styled.h1`
    
    width: 263px;
    height: 104px;
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 104px;
    text-transform: uppercase;
`;

const StyledContent = styled.p`

    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
`;
const StyledSourceArrow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const StyledSource = styled.a`
    text-decoration: none;
    font-family: 'League Spartan', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color: gray;
    text-decoration: underline;
    display: flex;
    gap: 5px;
`;

const StyledArrow = styled.img`
    width: 20px;
    align-self: baseline;
`;

const StyledOverview = styled.div`
    width: 350px;
    height: 176px;
    display: flex;
    flex-flow: column ;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 50px;
`;

const StyledContainerOver = styled.div`
    width: 350px;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 25px;
    border: 1px solid grey;

    &.active {
        background-color: ${({color})=> color};
    }
`;

const StyledNumber = styled.h1`
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.57143px;
    text-transform: uppercase;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    padding: 20px;
`;
const StyledOverH1 = styled.h1`

    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.57143px;
    text-transform: uppercase;
    
`;

const StyledInfoDown = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 120px;


`;

const StyledBox = styled.div`
    width: 255px;
    height: 128px;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;

`;

const StyledBoxH2 = styled.h3`
   font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.5;
    
`;

const StyledBoxH3 = styled.h1`
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -1.5px;
    text-transform: uppercase;
`;

export {StyledInfo, StyledText, StyledH1, StyledContent, StyledSource, StyledContainer, StyledArrow, StyledPosition, StyledOverview, StyledContainerOver, StyledOverH1, StyledNumber, StyledInfoDown, StyledBox, StyledBoxH2, StyledBoxH3 , StyledImages , StyledSourceArrow};