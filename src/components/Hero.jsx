import React from "react";
import hero from "../assets/hero/hero-image.png";
import styled from "styled-components";

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
        <StyledBackgroundBottom />
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
letter-spacing: 0.1rem;

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
background: linear-gradient(90deg, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 120% );
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


@media screen and (max-width: 768px) {
margin: 1rem 0 3rem;
font-size: 1.3rem;
}
`;

const StyledContact = styled.a`
background-color: var(--contact-me-color);
box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
border-radius: 5rem;
color: var(--text-color);
padding: 0.7rem 1.2rem;
margin-bottom: 4rem;
font-size: 1.5rem;
font-weight: 600;
text-decoration: none;

&:hover {
    opacity: 0.9;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.40);
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


const StyledBackgroundTop = styled.div`
background: rgba(92, 66, 44, 0.6);
border-radius: 14rem;
width: 50vw;
height: 50vw;
min-width: 5rem;
min-height: 5rem;
position: absolute;
top: 12rem;
left: -22vw;
filter: blur(10rem);
z-index: 0;
`;

const StyledBackgroundBottom = styled.div`
background: rgba(92, 66, 44, 0.1);
border-radius: 14rem;
width: 50vw;
height: 50vw;
min-width: 4rem;
min-height: 5rem;
position: absolute;
top: 0;
right: 40vw;
filter: blur(10rem);
z-index: 0;
`;