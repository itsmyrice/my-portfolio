import React, { useRef } from "react";
import styled from "styled-components";
import { contacsData } from "../data/contactsData";
import emailjs from '@emailjs/browser';


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
     <StyledFormWrapper>
      <StyledFormLeft>
        <div>
            <StyledTitle>Contact</StyledTitle>
            <StyledDescription>Feel free to reach out!</StyledDescription>
            <StyledDescription>Currently exploring new career opportunities and would be grateful if you could take a moment to review my <StyledCvLink href="https://app.enhancv.com/share/57922f9e/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank" rel="noopener noreferrer">CV</StyledCvLink> for further insights.</StyledDescription>
        </div>

        <StyledContactWrapper>
            {contacsData.map((contact, name) => (
                <StyledContact key={name}>
            <StyledContactImage src={contact.imageSrc} alt={contact.name} /> 
            {contact.name}  
            </StyledContact>
            ))}
        </StyledContactWrapper>
      </StyledFormLeft>
        <StyledContactForm ref={form} onSubmit={sendEmail}>          
            <StyledInput type="text" placeholder="Your Name" name="user_name" required />
            <StyledInput type="email" placeholder="Your Email" name="user_email" required />
            <StyledTextarea placeholder="Your Message" name="message" required ></StyledTextarea>
            <StyledButton type="submit">Send Message</StyledButton>
        </StyledContactForm>
     </StyledFormWrapper>
    </StyledContainer>
  )
};

const StyledContainer = styled.section`
width: 80%;
display: flex;
justify-content: center;
border-radius: 1rem;
margin: 10% 10%;
z-index: 1;
`;

const StyledFormWrapper = styled.div`
width: 80%;
/* background-color: #C0C0C0; */
background-color: rgba(241, 236, 226, 0.85);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
border-radius: 1rem;
box-shadow: 0 2rem 6rem rgba(6, 12, 15, 0.2);
padding: 4rem;
column-gap: 2rem;
color: var(--footer-background);

@media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    font-size: 1rem;
}
`;

const StyledFormLeft = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
row-gap: 1rem;
`;

const StyledTitle = styled.h2`
font-size: 2.2rem;
font-weight: 700;
letter-spacing: 0.1rem;
text-transform: uppercase;

@media screen and (max-width: 768px) {
   font-size: 2.2rem;
}
`;

const StyledDescription = styled.p`
margin: 1rem 0;
font-size: 1.1rem;

@media screen and (max-width: 768px) {
    font-size: 1rem;
}

`;

const StyledCvLink = styled.a`
color: var(--footer-background);
font-weight: 600;
`;

const StyledContactWrapper = styled.ul`
/* width: 100%; */
height: 10rem;
border: none;
list-style: none;
display: flex;
flex-direction: column;
gap: 1rem;
}
`;
    
const StyledContact = styled.li`
display: flex;
column-gap: 0.5rem;
font-size: 1.1rem;

@media screen and (max-width: 768px) {
    font-size: 1rem;

    &:last-child {
    border-bottom: 1px solid #635147;
    padding-bottom: 2rem;
    }
}
`;

const StyledContactImage = styled.img`
width: 1rem;
height: 1rem;
`;

const StyledContactForm = styled.form`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 1rem;

@media screen and (max-width: 768px) {
    width: 80%;
    font-size: 1rem;
}
`;

const StyledInput = styled.input`
width: 90%;
height: 2.2rem;
border: none;
border-bottom: 0.2rem solid #635147;
font-size: 1rem;
color: var(--footer-background);
background-color: transparent;
outline: none;

&::placeholder {
text-transform: uppercase;
font-size: 1rem;
color: #635147;
}

&:focus {
border: none;
box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.10);
}
`;


const StyledTextarea = styled.textarea`
resize: none;
width: 90%;
height: 7rem;
border: none;
border-bottom: 0.2rem solid #635147;
font-size: 1rem;
color: var(--footer-background);
background-color: transparent;
outline: none;

&::placeholder {
text-transform: uppercase;
font-size: 1rem;
color: #635147;
}

&:focus {
border: none;
box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.10);
}
`;

const StyledButton = styled.button`
width: 90%;
height: 2.7rem;
background-color: var(--footer-background);
border: none;
border-radius: 1rem;
font-size: 1rem;
color: var(--text-color);
text-transform: uppercase;
cursor: pointer;
box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.10);

&:active {
transform: translateY(0.2rem);
}
`;
