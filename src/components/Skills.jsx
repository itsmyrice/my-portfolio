import React from "react";
import styled from "styled-components";
import { skillsData } from "../data/skillsData";

export default function Try() {
   return (
      <StyledContainer id="skills">
        <StyledTitle>Skills</StyledTitle>
        <StyledContent>
          <StyledSkills>
            {skillsData.map((skill, name) => (
              <StyledSkillList key={name}>
                <StyledImageContainer>
                  <StyledImage src={skill.imageSrc} alt={skill.name} />
                </StyledImageContainer>
                <StyledText>{skill.name}</StyledText>
              </StyledSkillList>
            ))}
          </StyledSkills>
        </StyledContent>
      </StyledContainer>
    );
};

const StyledContainer = styled.section`
color: var(--text-color);
margin: 4rem 0 0 0;
`;

const StyledTitle = styled.h2`
color: var(--text-color);
font-size: 2.2rem;
font-weight: 700;
margin: 8rem 10% 2rem;
letter-spacing: 0.1rem;
text-transform: uppercase;

@media screen and (max-width: 768px) {
  font-size: 2.2rem;
 }

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
border-radius: 100%;
width: 10rem;
height: 10rem;
margin: 1rem;
display: flex;
justify-content: center;
align-items: center;
transition: filter 100ms;
&:not(:hover) {
  filter: brightness(62%);
}
`;

const StyledImage = styled.img`
width: 50%;
height: 50%;
&:has(StyledImageContainer:hover)
`;

const StyledText = styled.p`
font-family: var(--font-roboto);
font-size: 1.5rem;

@media screen and (max-width: 768px) {
  font-size: 1.3rem;
 }
`;