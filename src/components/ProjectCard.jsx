import React from "react";
import styled from "styled-components";

export default function ProjectCard({ project : { title, skills, imageSrc, link } }) {
  return (
    <StyledContainer>
            <StyledImage src={imageSrc} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <StyledSkillLists>
              {skills.map((skill, link) => (
                <StyledSkill key={link}>{skill}</StyledSkill>
              ))}
            </StyledSkillLists>
            <StyledLinkWrapper>
              <StyledLink href={link} target="_blank" rel="noopener noreferrer">Link</StyledLink>
            </StyledLinkWrapper>
          </StyledContainer>
  )
}

const StyledContainer = styled.section`
background: linear-gradient(180deg, #926644 0%, #3D2B1F 110%);
box-shadow: 0 16px 14px 0 #3D2B1F;
border-radius: 1rem;
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
width: 25rem;

@media screen and (max-width: 768px) {
    max-width: 15rem;
}
`;

const StyledImage = styled.img`
margin-bottom: 1rem;
width: 22.8rem;
height: 14rem;

@media screen and (max-width: 768px) {
    max-width: 12rem;
    max-height: 10rem;
}
`;

const StyledTitle = styled.h3`
letter-spacing: 0.1rem;
font-size: 1.8rem;
font-weight: 700;

@media screen and (max-width: 768px) {
  font-size: 1.6rem;
 }
`;

const StyledSkillLists = styled.ul`
margin-top: 1rem;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 0.5rem;
list-style: none;
`;

const StyledSkill = styled.li`
background-color: var(--background-color);
border-radius: 10rem;
font-size: 1.3rem;
font-weight: 400;
padding: 0.3rem 1.4rem;

@media screen and (max-width: 768px) {
  font-size: 1.1rem;
 }
`;

const StyledLinkWrapper = styled.div`
width: 100%;
margin-top: 1rem;
display: flex;
justify-content: center;
`;

const StyledLink = styled.a`
background: var(--light-dark-color);
color: var(--text-color);
border-radius: 10rem;
text-decoration: none;
font-size: 1.5rem;
font-weight: 600;
padding: 0.3rem 1.4rem;

&:hover {
  opacity: 0.9;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.30);
} 
`;