import React from "react";
import styled from "styled-components";
import { socialsData } from "../data/socialsData";

export default function Footer() {
  return (
    <StyledContainer>
        <StyledWrapper>
            <StyledSocials>
                <StyledText>&copy; 2024 Glory Ann Conwi</StyledText>
                {socialsData.map((social, name) => (
                    <li key={name}>
                    <a href={social.link} target="_blank" rel="noopener noreferrer"><img src={social.imageSrc} alt={social.name} width={23}/></a>                   
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
display: flex;
justify-content: flex-end;
`;

const StyledWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 0 10%;
`;

const StyledSocials = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
justify-content: flex-end;
gap: 2rem;

@media screen and (max-width: 768px) {
    gap: 1rem;  
    align-items: center;
}
`;

const StyledText = styled.p`
font-size: 1rem;
position: absolute;
left: 10%;

@media screen and (max-width: 420px) {
   position: static;
}
`;