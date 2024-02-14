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
color: var(--text-color);
margin: 4rem 10% 0;
`;

const StyledTitle = styled.h2`
margin: 8rem 0 4rem;
font-size: 2.2rem;
font-weight: 700;
letter-spacing: 0.1rem;
text-transform: uppercase;

@media screen and (max-width: 768px) {
  font-size: 2.2rem;
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
