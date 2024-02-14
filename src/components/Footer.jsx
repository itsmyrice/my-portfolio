import React from "react";
import styled from "styled-components";
import { socialsData } from "../data/socialsData";

export default function Footer() {
  return (
    <StyledContainer>
        <StyledWrapper>
        <p>&copy; 2024 Glory Ann Conwi</p>
            <StyledSocials>
                {socialsData.map((social, name) => (
                <li key={name}>
                    <a href={social.link} target="_blank" rel="noopener noreferrer"><StyledImage src={social.imageSrc} alt={social.name} /></a>                   
                </li>
                ))}
            </StyledSocials>   
        </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.footer`
width: 100%;
height: 10vh;
background-color: var(--footer-background);
color: var(--text-color2);
`;

const StyledWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0 10%;
padding: 2.2rem 0;

@media screen and (max-width: 768px) {
    padding: 1rem 0;
    align-items: center;
}
`;

const StyledSocials = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 2rem;

@media screen and (max-width: 768px) {
    gap: 1rem;  
}
`;

const StyledImage = styled.img`
width: 1.6rem;
`;