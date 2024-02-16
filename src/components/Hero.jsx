import React from "react";
import hero from "../assets/hero/hero-image.png";
import styled from "styled-components";
import { StyledBackgroundTop } from "../styles";

export default function Hero() {
  return (
    <StyledContainer>
        <StyledContent>
            <StyledTitle>Hi, I'm Glory Ann</StyledTitle>
            <StyledDescription>I have completed my training as a Full Stack Developer at neuefische GmbH. Throughout this journey in web development, I acquired proficiency in HTML, CSS, JavaScript, and various web development frameworks, including React and Next.js.</StyledDescription>
           <StyledContact href="#contact">Contact Me</StyledContact>
        </StyledContent>
        <StyledHeroImage src={hero} alt="Hero image" />
        <StyledBackgroundTop />
    </StyledContainer>
  )
};

const StyledContainer = styled.section`
margin: 8rem 10% 2rem 10%;
display: flex;
position: relative;
align-items: center;
justify-content: space-between;
z-index: 1;

@media screen and (max-width: 768px) {
flex-direction: column-reverse;
letter-spacing: 0;
}
`;

const StyledContent = styled.div`
color: var(--text-color);
display: flex;
flex-direction: column;
align-items: flex-start;
z-index: 1;


@media screen and (max-width: 768px) {
align-items: center;
}
`;

const StyledTitle = styled.h1`
margin: 1.7rem 0;
font-family: var(--font-roboto);
font-size: 3.3rem;
font-weight: 900;
letter-spacing: 0.1rem;
background: linear-gradient(90deg, rgba(17, 17, 17, 1) 65%, rgba(217, 144, 88, 0.7) 120% );
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;

@media screen and (max-width: 768px) {
    font-size: 2.5rem;
}
`;

const StyledDescription = styled.p`
margin: 2rem 10rem 4rem 0;
font-family: var(--font-roboto);
font-size: 1.5rem;
letter-spacing: 1px;

@media screen and (max-width: 768px) {
margin: 1rem 0 3rem;
font-size: 1.3rem;
}
`;

const StyledContact = styled.a`
background-color: var(--button-color);
box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
border-radius: 5rem;
padding: 0.7rem 1.2rem;
margin-bottom: 4rem;
font-size: 1.5rem;
font-weight: 600;
text-decoration: none;

&:hover {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.34);
  } 
`;

const StyledHeroImage = styled.img`
border-radius: 50%;
width: 23rem;
height: 22rem;
z-index: 1;

animation-name: floating;
animation-duration: 4s;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;

@keyframes floating {
    0% {
        transform: translate(0, 0px);
    }
    50% {
        transform: translate(0, 15px);
    }
    100% {
        transform: translate(0, -0px);
    }
}

@media screen and (max-width: 768px) {
    width: 15rem;
    height: 14rem;
    }

`;


