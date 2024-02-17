import React from "react";
import girl from "../assets/about/girl-with-a-laptop.png";
import frontend from "../assets/about/frontend.png";
import backend from "../assets/about/backend.png";
import styled from "styled-components";


export default function About() {
  return (
    <StyledContainer id="about">
        <StyledTitle>About</StyledTitle>
        <StyledContent>
            <StyledGirlImage src={girl} alt="Girl with a laptop" />
        <StyledAboutItems>
            <StyledListItems>
                <StyledIcon src={frontend} alt="Frontend icon" />
                <div>
                    <StyledDeveloperTitle>Frontend Developer</StyledDeveloperTitle>
                    <StyledDescription>I have gained a solid understanding in HTML, CSS and JavaScript, enabling me to build responsive and visually appealing web interfaces. Through hands-on projects and immersive learning experiences, I have honed my skills in front-end frameworks like React.js and Next.js, equipping me to create dynamic and interactive user experiences.</StyledDescription>
                </div>
            </StyledListItems>
            <StyledListItems>
                <StyledIcon src={backend} alt="Backend icon" />
                <div>
                    <StyledDeveloperTitle>Backend Developer</StyledDeveloperTitle>
                    <StyledDescription> I have gained a solid understanding of backend development, including working with databases, server-side scripting and API integration. My experience in the bootcamp has equipped me with the skills to contribute to backend tasks and collaborate effectively with full-stack development teams.</StyledDescription>
                </div>
            </StyledListItems>
        </StyledAboutItems>
        </StyledContent>      
    </StyledContainer>
  )
};

const StyledContainer = styled.section`
background-color: var(--sectioon-background-color);
border-radius: 1rem;
padding: 4rem;
position: relative;
z-index: 1;

@media screen and (max-width: 768px) {
padding: 2rem;
`;

const StyledContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const StyledTitle = styled.h2`
font-size: 2.2rem;
font-weight: 700;
margin: 0 10% 2rem 10% ;
letter-spacing: 0.1rem;
text-transform: uppercase;

@media screen and (max-width: 768px) {
 font-size: 2.2rem;
}
`;

const StyledGirlImage = styled.img`
padding-right: 1.5rem;
width: 35%;

@media screen and (max-width: 815px) {
    display: none;
}
`;

const StyledAboutItems = styled.ul`
color: var(--text-color);
display: flex;
flex-direction: column;
gap: 2.5rem;
`;

const StyledListItems = styled.li`
padding: 1rem;
list-style: none;
display: flex;
flex-direction: row;
align-items: center;
background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(248, 131, 121, 0.62) 140%);
border-radius: 1.2rem;
background-size: 0 100%;
background-repeat: no-repeat;
transition: 0.4s;

&:hover {
background-size: 100% 100%;
}

@media screen and (max-width: 768px) {
    padding-right: 0; 
    padding-left: 0;
}
`;

const StyledIcon = styled.img`
width: 20%;

@media screen and (max-width: 768px) {
    width: 30%;
}
`;

const StyledDeveloperTitle = styled.h3`
font-size: 1.6rem;
font-weight: 600;
margin-bottom: 1rem;

@media screen and (max-width: 768px) {
    font-size: 1.4rem;
   }
`;

const StyledDescription = styled.p`
font-size: 1.3rem;
`;

