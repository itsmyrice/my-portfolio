import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const StyledBackgroundTop = styled.div`
background: rgba(142, 195, 176, 0.38);
border-radius: 25%;
width: 60%;
height: 80%;
position: absolute;
top: 6rem;
left: -2vw;
filter: blur(10rem);
z-index: 0;
`;

export const StyledBackgroundBottom = styled.div`
background: rgba(142, 195, 176, 0.35);
border-radius: 25%;
width: 70%;
height: 80%;
position: absolute;
bottom: 100;
right: 10;
filter: blur(10rem);
z-index: 0;

`;

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Outfit", Arial, Helvetica, sans-serif;
    color: var(--toggle-text-color);
}

:root {
    /* Fonts */
    --font-roboto: "Roboto";
  
    /* Default colors */
    --toggle-background-color: rgba(158, 213, 197, 0.19);
    --toggle-text-color: #111111;
    --toggle-contact-color: #79443B;
    --footer-background: rgba(143, 195, 176, 0.95);
    --button-color: rgba(248, 131, 121, 0.68); // #F88379;
    --sectioon-background-color: rgba(255, 255, 255, 0.82);
    --blur-color: rgba(233, 116, 81, 0.2);
}

body {
    scroll-behavior: smooth;
    min-height: 100vh;
}
 `;