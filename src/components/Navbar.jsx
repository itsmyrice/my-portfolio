import React, { useState } from "react";
import menu from "../assets/navbar/menu.png"
import menuClose from "../assets/navbar/menu-close.png"
import styled from "styled-components";
import logo from "../assets/logo/logo.png"


export default function Navbar() {
  const [menuDisplay, setMenuDisplay] = useState(false);
  return (
    <StyledNav>
      <a href="/"><StyledLogo src={logo} alt="Logo" /></a>
      <StyledMenu>
          <StyledMenuIcon src={menuDisplay ? menuClose : menu} alt={menuDisplay ? "Close icon" : "Menu icon"} onClick={() => setMenuDisplay(!menuDisplay)} />
           <StyledMenuItems style={{ display: menuDisplay ? "flex" : "none"}} onClick={() => setMenuDisplay(false)}>
          <StyledListItems>
            <StyledTitle href="/About">About</StyledTitle>
          </StyledListItems>
          <StyledListItems>
            <StyledTitle href="/education">Education</StyledTitle>
          </StyledListItems>
          <StyledListItems>
            <StyledTitle href="/projects">Projects</StyledTitle>
          </StyledListItems>
          <StyledListItems>
            <StyledTitle href="/contact">Contact</StyledTitle>
          </StyledListItems>
          </StyledMenuItems>
      </StyledMenu>
    </StyledNav>
  ) 
};

const StyledNav = styled.nav`
padding-top: 1.5rem;
margin: 0 10%;
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 2;

@media screen and (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
}
`;

const StyledLogo = styled.img`
width: 4.6rem;
height: 3.8rem;
`;

const StyledTitle = styled.a`
color: var(--text-color);
text-decoration: none;
font-size: 2rem;
`;

const StyledMenu = styled.div`
display: flex;

@media screen and (max-width: 768px) {
  position: absolute;
  right: 0;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.7rem;
  z-index: 3;
}
`;


const StyledMenuIcon = styled.img`
cursor: pointer;
margin-top: 0.5rem;
width: 1.8rem;
height: 1.5rem;

 @media screen and (max-width: 768px) {
  display: block;
}
`;

const StyledMenuItems = styled.ul`
list-style: none;
display: flex;
gap: 2.5rem;

@media screen and (max-width: 768px) {
  background: rgb(99, 81, 71);
  background: linear-gradient(0deg, rgba(99, 81, 71, 0.2) 0%, rgba(99, 81, 71, 1) 150%);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.6rem;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.3rem 1.8rem;
}
`;

const StyledListItems = styled.li`
color: var(--text-color);
text-decoration: none;
font-size: 1.2rem;
`;