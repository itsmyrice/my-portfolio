import React, { useRef } from "react";
import styled from "styled-components";
import nameLogo from "../assets/name-logo/name-logo.png"
import { MdMenu, MdOutlineClose } from "react-icons/md";

export default function Navbar() {
const navRef = useRef();
function displayMenu () {
  navRef.current.classList.toggle("responsive_nav");
}
  return (
    

  <StyledNav>
         <StyledMenuItems ref={navRef}>
         <StyledListItems>
          <StyledLink href="/">
            <StyledImage src={nameLogo} alt="Logo" width={85} height={65} />
            </StyledLink>
          </StyledListItems>
          <StyledListItems>
            <StyledLink href="#about" className="navLinks">About</StyledLink>
          </StyledListItems>
          <StyledListItems >
            <StyledLink href="#skills" className="navLinks">Skills</StyledLink>
          </StyledListItems>
          <StyledListItems children>
            <StyledLink href="#projects" className="navLinks">Projects</StyledLink>
          </StyledListItems>
          <StyledButtonShow onClick={displayMenu} className="navMenu navClose">
            <MdOutlineClose />
            </StyledButtonShow>
          </StyledMenuItems>

          <StyledButtonShow onClick={displayMenu} className="navMenu">
          <MdMenu/>
          </StyledButtonShow>
    </StyledNav>

  )

};


const StyledNav = styled.nav`
background-color: var(--text-color);
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
color: var(--footer-background);
position: fixed;
width: 100%;
height: 3.5rem;

z-index: 5;

`;

const StyledMenuItems = styled.ul`
list-style: none;
display: flex;
align-items: center;

@media only screen and (max-width: 768px) {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
 gap: 1rem;
  z-index: 10;
 background-color: rgba(241, 236, 226, 0.8);
 backdrop-filter: blur(10px);
box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
transition: 1s;
transform: translateY(-100vh);

&.responsive_nav {
  transform: none;
}
}

`;

const StyledListItems = styled.li`
padding: 0 2%;

&:first-child {
  margin-right: auto;
  margin-left: 2%;
 height: 2.5rem;
}

&:first-child:hover {
  background-color: transparent;
  filter: hue-rotate(10deg);
}

@media only screen and (max-width: 768px) {
display: flex;
justify-content: center;
row-gap: 2rem;
  &:hover {
    width: 100%;
    transition: 1s;
  }

&:first-child {
justify-content: flex-start;
margin-left: 0;
margin-top: 0;
margin-bottom: 1.5rem;
}
`;

const StyledButtonShow = styled.button`
cursor: pointer;
background: transparent;
padding-right: 0.7rem;
border: none;
outline: none;
color: black;
visibility: hidden;
opacity: 0;
font-size: 2.3rem;


@media only screen and (max-width: 768px) {
  &.navMenu {
  visibility: visible;
  opacity: 1;
  position: absolute;
  right: 0;
  padding: 0.7rem;
}

&.navClose {
  position: absolute;
  }
}
`;

const StyledLink = styled.a`
text-decoration: none;
color: black;
font-size: 1.4rem;

&.navLinks:after {
  content: '';
  display: block;
  margin: auto;
  width: 0;
  height: 3px;
   background: var(--footer-background);
    
}

&.navLinks:hover:after {
  width: 100%;
  transition: width 0.3s linear;
}

@media only screen and (max-width: 768px) {
  font-size: 1.2rem;
  padding: 0.4rem;
  color: var(--footer-background);
}
`;

const StyledImage = styled.img`

@media only screen and (max-width: 768px) {
  width: 3.2rem;
  height: 3.2rem;
}
`;
