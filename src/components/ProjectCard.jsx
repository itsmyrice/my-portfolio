import React from "react";
import styled from "styled-components";

export default function ProjectCard({ project : { title, skills, imageSrc, link, rank } }) {
  return (
    <StyledContainer>
            <StyledImage src={imageSrc} alt={title} />
            <StyledImageText>{rank}</StyledImageText>
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
background: linear-gradient(180deg, rgba(217, 144, 88, 0.74) 0%, rgba(255, 127, 80, 0) 140%);
box-shadow: 0 0 9px 5px rgba(17, 17, 17, 0.15);
border-radius: 1rem;
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
width: 28rem;
height: 35rem;
z-index: 1;
position: relative;

@media screen and (max-width: 485px) {
    max-width: 20rem;
    max-height: 27rem;
}
`;

const StyledImage = styled.img`
margin-bottom: 1rem;
width: 26rem;
height: 18rem;
border-radius: 1rem;

@media screen and (max-width: 485px) {
    max-width: 18rem;
    max-height: 12rem;
}
`;


const StyledImageText = styled.span`
/* transform: translate(-50%, -50%); */
  color: #fff;
  position: absolute;
  letter-spacing: 0.1rem;
  top: 3%;
  left: 5%;
  z-index: 10;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (max-width: 485px) {
    top: 5%;
    left: 10%;
}
`;

const StyledTitle = styled.h3`
letter-spacing: 0.1rem;
font-size: 1.8rem;
font-weight: 700;

@media screen and (max-width: 485px) {
  font-size: 1.6rem;
 }
`;

const StyledSkillLists = styled.ul`
margin-top: 1rem;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
gap: 0.5rem;
list-style: none;
`;

const StyledSkill = styled.li`
background-color: rgba(237, 201, 175, 0.56);
border-radius: 10rem;
font-size: 1.3rem;
font-weight: 400;
padding: 0.3rem 1.4rem;

@media screen and (max-width: 485px) {
  font-size: 1.1rem;
  padding: 0.2rem 0.8rem;
 }
`;

const StyledLinkWrapper = styled.div`
width: 100%;
margin-top: 1rem;
display: flex;
justify-content: center;
`;

const StyledLink = styled.a`
background: var(--button-color);
border-radius: 10rem;
text-decoration: none;
font-size: 1.5rem;
font-weight: 600;
padding: 0.3rem 1.4rem;

&:hover {
  opacity: 0.9;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.30);
} 

@media screen and (max-width: 485px) {
  font-size: 1.3rem;
  padding: 0.3rem 1rem;
 }
`;