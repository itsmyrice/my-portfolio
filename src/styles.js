import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const StyledBackgroundTop = styled.div`
background: rgba(217, 144, 88, 0.20);
border-radius: 50%;
width: 60vw;
height: 50vw;
/* min-width: 4rem;
min-height: 5rem; */
position: absolute;
top: 8rem;
left: -10vw;
filter: blur(10rem);
z-index: 0;
`;

export const StyledBackgroundBottom = styled.div`
background: rgba(172, 225, 175, 0.20);
border-radius: 50%;
width: 50vw;
height: 45vw;
/* min-width: 4rem;
min-height: 5rem; */
position: absolute;
bottom: 100;
right: 0;
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
    --toggle-background-color: rgba(53, 53, 53, 0.24);
    --toggle-text-color: #111111;
    --toggle-contact-color: #79443B;
    --footer-background: rgba(123, 160, 91, 0.85);
    --button-color: rgba(217, 144, 88, 0.8); //#D99058;
    --blur-color: rgba(233, 116, 81, 0.2);
}

body {
    scroll-behavior: smooth;
    min-height: 100vh;
}
 `;