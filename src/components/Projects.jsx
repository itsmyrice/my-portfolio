import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  
  return (
    <StyledContainer id="projects">
      <StyledTitle>Projects</StyledTitle>
      <StyledProjects>
        {projectsData.map((project, link) => (
          <ProjectCard key={link} project={project}/>
        ))}
      </StyledProjects>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
background-color: var(--sectioon-background-color);
color: var(--text-color);
margin: 4rem 0;
padding: 4rem;

@media screen and (max-width: 768px) {
padding: 2rem;
`;

const StyledTitle = styled.h2`
margin: 0 10% 2rem;
font-size: 2.2rem;
font-weight: 700;
letter-spacing: 0.1rem;
text-transform: uppercase;

@media screen and (max-width: 768px) {
  font-size: 2.2rem;
  margin: 2rem 0;
 }
`;

const StyledProjects = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
alignt-items: center;
justify-content: center;
gap: 2rem;
`;
