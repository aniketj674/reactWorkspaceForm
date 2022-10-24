import React, { useState } from 'react';
import { MyIcon, Person, Team, Sucess } from 'svgs';
import Stepper from 'react-stepper-js';
import 'react-stepper-js/dist/index.css';
import {
    Wrapper, AppContainer, HeaderContainer, ProgressContainer, Title, SubTitle, InputTitle,
    InputField, NextBtn, Holder, Card, CardTitle, CardText, CardContainer, SuccessIconContainer,
    Optinaltext, UrlField, DefaultUrl
} from './Form.style';

function Form() {
    const [card, setCard] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [disableSubmit, setDisableSubmit] = useState(false);
    const mainTexts = ['Welcome! First things first...',"Let's set up a home for all your work", 'How are you planning to use Eden?','Congratulations, Eren!']
    const subTexts = ['You can always change them later', 'You can always create another workspace later.', "We'll streamline your setup experience accordingly.", 'You have completed onboarding, you can start using the Eden!']; 
 
    function handleClick(){
        if(currentPage<3) {
            setCurrentPage(currentPage+1);
        } else {
            setDisableSubmit(true);
            alert('Workspace created');
        }
    }

    return(
        <Wrapper>
            <AppContainer>
                <HeaderContainer><Holder><MyIcon></MyIcon>Eden</Holder></HeaderContainer>
                <ProgressContainer>
                    <Stepper
                        color="#664de5"
                        fontSize="20px"
                        fontColor="#664de5"
                        steps={[
                            { label: "1" },
                            { label: "2" },
                            { label: "3" },
                            { label: "4" }
                        ]}
                        currentStep={currentPage+1}
                    />
                </ProgressContainer>
                {currentPage == 3 && <SuccessIconContainer><Sucess/></SuccessIconContainer>}
                <Title>{mainTexts[currentPage]}</Title>
                <SubTitle>{subTexts[currentPage]}</SubTitle>
                {currentPage == 0 && (
                    <>
                        <InputTitle>Full Name</InputTitle>
                        <InputField placeholder='Steve Jobs'/>
                        <InputTitle>Display Name</InputTitle>
                        <InputField placeholder='Steve'/>
                    </>
                )}
                {currentPage == 1 && (
                    <>
                        <InputTitle>Workspace Name</InputTitle>
                        <InputField placeholder='Eden'/>
                        <InputTitle>Workspace URL &nbsp;<Optinaltext>{`(Optional)`}</Optinaltext></InputTitle>
                        <DefaultUrl>www.eden.com/</DefaultUrl><UrlField placeholder='Example'/>
                    </>
                )}
                {currentPage == 2 && (
                    <CardContainer>
                        <Card className={card==='single'&& 'active'} onClick={()=>{setCard('single')}}>
                            <Person></Person>
                            <CardTitle>For myself</CardTitle>
                            <CardText>Write better. Think more clearly. stay organized.</CardText>
                        </Card>
                        <Card className={card==='team' && 'active'} onClick={()=>{setCard('team')}}>
                            <Team></Team>
                            <CardTitle>With my team</CardTitle>
                            <CardText>Wikis, docs, tasks and projects, all in one place.</CardText>
                        </Card>
                    </CardContainer>
                )}
                <NextBtn className={disableSubmit && 'disabled'} onClick={handleClick} disabled={disableSubmit}>{currentPage < 3 ? 'Next' : 'Create Workspace'}</NextBtn>
            </AppContainer>
        </Wrapper>
    );
}

export default Form;
