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
background-color: rgba(107, 68, 35, 0.8);
border-radius: 1rem;
margin-top: 7.5rem;
margin: 0 10%;
padding: 4rem;
position: relative;
z-index: 1;

@media screen and (max-width: 768px) {
background-color: transparent;
padding-left: 0;
padding-right: 0;
}
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
color: var(--text-color);
font-size: 2.2rem;
font-weight: 700;
margin-bottom: 2rem;
letter-spacing: 0.1rem;
text-transform: uppercase;
`;

const StyledGirlImage = styled.img`
padding-right: 1.5rem;
width: 50%;

@media screen and (max-width: 768px) {
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
background-image: linear-gradient(90deg, rgba(146, 102, 68, 0.42) 0%, rgba(107, 68, 35, 0) 100%);
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
width: 40%;
`;

const StyledDeveloperTitle = styled.h3`
font-size: 1.3rem;
font-weight: 600;
`;

const StyledDescription = styled.p`
font-size: 1.3rem;
`;

