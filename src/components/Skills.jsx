import React from 'react'
import html from "../assets/data/html.png"
import css from "../assets/data/css.png"
import javascript from "../assets/data/javascript.png"
import react from "../assets/data/react.png"
import nextjs from "../assets/data/nextjs.png"
import github from "../assets/data/github.png"
import git from "../assets/data/git.png"
import styledcomponents from "../assets/data/styled-components.png"
import vercel from "../assets/data/vercel.png"
import mongodb from "../assets/data/mongodb.png"
import styled from 'styled-components'


export default function Skills() {
  return (
    <StyledContainer id="skills">
        <StyledTitle>Skills</StyledTitle>
        <StyledContent>
           <StyledSkills>
            <StyledSkillList>
            <StyledImageContainer>
             <StyledImage src={html} alt="HTML" />
             </StyledImageContainer>
             <StyledText>HTML</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={css} alt="CSS" />
             </StyledImageContainer>
             <StyledText>CSS</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={javascript} alt="JavaScript" />
             </StyledImageContainer>
             <StyledText>JavaScript</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={react} alt="React" />
             </StyledImageContainer>
             <StyledText>React</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={nextjs} alt="Nextjs" />
             </StyledImageContainer>
             <StyledText>Nextjs</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={github} alt="GitHub" />
             </StyledImageContainer>
             <StyledText>GitHub</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={git} alt="Git" />
             </StyledImageContainer>
             <StyledText>Git</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={styledcomponents} alt="styled-components" />
             </StyledImageContainer>
             <StyledText>Styled-components</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={vercel} alt="Vercel" />
             </StyledImageContainer>
             <StyledText>Vercel</StyledText>
             </StyledSkillList>
             <StyledSkillList>
             <StyledImageContainer>
             <StyledImage src={mongodb} alt="MongoDB" />
             </StyledImageContainer>
             <StyledText>MongoDB</StyledText>
             </StyledSkillList>
             </StyledSkills>
        </StyledContent>
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
color: var(--text-color);
margin: 4rem 0 0 0;
`;

const StyledTitle = styled.h2`
color: var(--text-color);
font-size: 2.2rem;
font-weight: 700;
letter-spacing: 0.1rem;
text-transform: uppercase;
margin: 8rem 10% 2rem;

`;

const StyledContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;

@media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
}
`;

const StyledSkills = styled.div`
width: 80%;
display: inline-flex;
flex-wrap: wrap;
row-gap: 1rem;

@media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;

}
`;

const StyledSkillList = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

const StyledImageContainer = styled.div`
background-color: var(--light-dark-color);
width: 10rem;
height: 10rem;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 1rem;
`;

const StyledImage = styled.img`
width: 50%;
height: 50%;
`;

const StyledText = styled.p`
font-size: 1.5rem;
font-family: var(--font-roboto);
`;
