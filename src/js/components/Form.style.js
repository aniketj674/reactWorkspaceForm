import styled from 'styled-components';

export const Wrapper = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    user-select: none;
`;

export const AppContainer = styled.div`
    position: absolute;
    width: 33vw;
    height: 75vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    overflow: hidden;
    padding: 0.5vw;
    font-family: Inter;

    @media only screen and (max-height: 768px) {
        height: 90vh;
    }

    @media only screen and (max-width: 600px) {
        width: 80vw;
    }
`;

export const HeaderContainer = styled.div`
    position: relative;
    font-weight: bold;
    font-size: 3vh;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

export const ProgressContainer = styled.div`
    position: relative;
    font-weight: bold;
    width: 100%;
    height: 15%;
    margin-top: 5%;

    @media only screen and (max-height: 600px) {
        height: 25%;
    }

`;

export const Title = styled(HeaderContainer)`
    margin-top: 5%;
    height: 5%;
    text-align-last: center;

    @media only screen and (max-width: 768px) {
        font-size: 1.2vh;
    }
 
    @media only screen and (max-width: 1366px) {
        font-size: 1.8vh;
    }
  
    @media only screen and (min-width: 1920px) {
        font-size: 3.2vh;
    }
`;

export const SubTitle = styled(Title)`
    height: 5%;
    font-weight: normal;
    margin-top: 2%;
    opacity: 0.7;
    font-size: 2vh;

    @media only screen and (max-width: 768px) {
        font-size: 1vh;
    }
 
    @media only screen and (max-width: 1366px) {
        font-size: 1vh;
    }
  
    @media only screen and (min-width: 1920px) {
        font-size: 2vh;
    }
`;

export const InputTitle = styled.div`
    position: relative;
    width: 100%;
    height: 5%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    font-size: 2vh;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5vh;
    }
`;

export const InputField = styled.input`
    position: relative;
    width: 95%;
    height: 5%;
    margin-top: 2%;
`;

export const NextBtn = styled.button`
    position: relative;
    width: 98%;
    height: 8%;
    margin-top: 5%;
    background-color: #664de5;
    color: #fbfbfbda;
    border: none;
    border-radius: 1.2vh;

    &.disabled{
        opacity: 0.5;
    }
`;

export const Holder = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 33%;
    padding-left: 7%;
`;

export const Card = styled.div`
    position: relative;
    width: 35%;
    height: 100%;
    border: 1px solid #b1b1b2f9;
    float: left;
    margin: 3%;
    padding: 2%;
    box-sizing: border-box;
    overflow: auto;
    border-radius: 1vh;

    &.active {
        border: 2px solid #664de5;
    }
`;

export const CardTitle = styled.div`
    position: relative;
    font-weight: bold;
    margin-top: 5%;
    font-size: 2.1vh;

    @media only screen and (max-width: 768px) {
        font-size: 1.2vh;
    }
 
    @media only screen and (max-width: 1366px) {
        font-size: 1.5vh;
    }
  
    @media only screen and (min-width: 1920px) {
        font-size: 2.1vh;
    }
`;

export const CardText = styled.div`
    position: relative;
    opacity: 0.6;
    margin-top: 6%;
    font-size: 2vh;

    @media only screen and (max-width: 768px) {
        font-size: 1vh;
    }
 
    @media only screen and (max-width: 1366px) {
        font-size: 1.2vh;
    }
  
    @media only screen and (min-width: 1920px) {
        font-size: 2vh;
    }
`;

export const SuccessIconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
`;

export const Optinaltext = styled.span`
    opacity: 0.6;
`;

export const DefaultUrl = styled.div`
    position: relative;
    background-color: #e8e8ebe4;
    height: 6%;
    width: 27%;
    float: left;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3%;
    font-size: 1.5vh;
`;

export const UrlField = styled.input`
    position: relative;
    width: 62%;
    height: 5%;
    margin-top: 2%;
    float: left;

    @media only screen and (max-width: 768px) {
        width: 58%;
    }
`;