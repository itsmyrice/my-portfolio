import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import gamedalf from "../assets/projects/gamedalf.png"
import rickAndMorty from "../assets/projects/rick-and-morty.png";
import musicCollection from "../assets/projects/music-collection.png";

/* Problem: The path to the imageSrc is not working! */

export const projectsData = [
  {
    title: "GameDalf",
    skills: ["HTML5", "CSS", "JavaScript", "React", "Next.js", "MongoDB"],
    imageSrc: gamedalf,
    link: "https://gamedalf.vercel.app",
  },
  {
    title: "Rick and Morty",
    skills: ["HTML5", "CSS", "JavaScript", "React"],
    imageSrc: rickAndMorty,
    link: "https://rick-and-morty-by-gm.vercel.app",
  },
  {
    title: "Music Collection",
    skills: ["HTML5", "CSS", "JavaScript", "React"],
    imageSrc: musicCollection,
    link: "https://gloryann-music-collection.vercel.app",
  }
];

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
