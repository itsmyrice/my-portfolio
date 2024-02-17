import React, { useRef } from "react";
import styled from "styled-components";
import { contacsData } from "../data/contactsData";
import emailjs from '@emailjs/browser';
import { StyledBackgroundBottom } from "../styles";


export default function Contact() {
    const form = useRef();

    function sendEmail(event) {
     event.preventDefault();

     emailjs
    .sendForm('service_gloryann', 'template_cfty74q', form.current, {
     publicKey: 'oohoKMfcAIim7CpC0',
     })
    .then(
    () => {
        console.log('SUCCESS!');
        },
        (error) => {
        console.log('FAILED...', error.text);
        },
    );
    event.target.reset();
    };


  return (
    <StyledContainer id="contact">
     <StyledContactWrapper>
      <StyledFormLeft>
        <StyledTitle>Contact</StyledTitle>
            <StyledTexts>Feel free to reach out!</StyledTexts>
            <StyledTexts>Currently exploring new career opportunities and would be grateful if you could take a moment to review my <StyledCvLink href="https://app.enhancv.com/share/57922f9e/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank" rel="noopener noreferrer">CV</StyledCvLink> for further insights.</StyledTexts>
        <StyledContactInfos>
            {contacsData.map((contact, name) => (
                <StyledContacts key={name}>
            <img src={contact.imageSrc} alt={contact.name} width={16} height={16} /> 
            {contact.name}  
            </StyledContacts>
            ))}
        </StyledContactInfos>
      </StyledFormLeft>
      <StyledFormRight>
        <form ref={form} onSubmit={sendEmail}>          
            <StyledInput type="text" placeholder="Your Name" name="user_name" required />
            <StyledInput type="email" placeholder="Your Email" name="user_email" required />
            <StyledTextarea placeholder="Your Message" name="message" required ></StyledTextarea>
            <StyledButton type="submit">Send Message</StyledButton>
        </form>
        </StyledFormRight>
     </StyledContactWrapper>
     <StyledBackgroundBottom />
    </StyledContainer>
  )
};

const StyledContainer = styled.section`
margin: 10% 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const StyledContactWrapper = styled.div`
width: 100%;
max-width: 60%;
background-color: #FFFFFF;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
column-gap: 1.5rem;
border-radius: 1rem;
box-shadow: 0 0 9px 5px rgba(17, 17, 17, 0.15);
padding: 4rem;
z-index: 1;

@media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    max-width: 30rem;
}

@media screen and (max-width: 485px) {
    width: 100%;
    max-width: 20rem;
    padding: 2rem 2rem;
}
`;

const StyledFormLeft = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
row-gap: 1.5rem;

@media screen and (max-width: 800px) {
    max-width: 100%;
}
`;

const StyledTitle = styled.h2`
font-size: 2.2rem;
font-weight: 700;
letter-spacing: 0.1rem;
text-transform: uppercase;

@media screen and (max-width: 800px) {
    font-size: 2.2rem;
}
`;
const StyledTexts = styled.p`
font-size: 1.2rem;
`;

const StyledCvLink = styled.a`
color: var(--footer-background);
font-weight: 600;
`;

const StyledContactInfos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.7rem;

@media screen and (max-width: 800px) {

    &:last-child {
        border-bottom: 1px solid rgba(17, 17, 17, 0.35);
        padding-bottom: 2rem;
    }
}
`;

const StyledContacts = styled.p`
font-size: 1.2rem;
display: flex;
flex-direction: row;
align-items: center;
gap: 0.5rem;
`;

const StyledFormRight = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.3rem;

@media screen and (max-width: 800px) {
    max-width: 100%;
}
`;

const StyledInput = styled.input`
min-width: 100%;
margin: 0.5rem 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 2.1rem;
border: none;

background-color: transparent;
border-bottom: 0.2rem solid rgba(142, 195, 176, 0.32);
outline: none;

&::placeholder {
text-transform: uppercase;
font-size: 1rem;
}

&:focus {
border: none;
box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.10);
}

@media screen and (max-width: 800px) {
   
    &:first-child {
    margin-top: 2rem;
    }
}
`;

const StyledTextarea = styled.textarea`
min-width: 100%;
resize: none;
height: 7rem;
border: none;
border-bottom: 0.2rem solid rgba(142, 195, 176, 0.32);
font-size: 1rem;
background-color: transparent;
outline: none;

&::placeholder {
text-transform: uppercase;
font-size: 1rem;
}

&:focus {
border: none;
box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.10);
}
`;

const StyledButton = styled.button`
min-width: 100%;
margin: 0.5rem 0;
height: 2.7rem;
background-color: rgba(142, 195, 176, 0.69);
border: none;
border-radius: 1rem;
font-size: 1rem;
text-transform: uppercase;
cursor: pointer;
box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.10);

&:active {
transform: translateY(0.2rem);
}
`;
