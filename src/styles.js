import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Outfit", Arial, Helvetica, sans-serif;
}

:root {
    /* Fonts */
    --font-roboto: "Roboto";

    /* Default Colors */
    --text-color: #f1ece2;
    --text-color2: #C0C0C0;
    --background-color: #3D2B1F;
    --dark-color: #635147;
    --light-dark-color: #926644;
    --primary-color: #FFE4E1;
    --secondary-color: #FBCEB1;
    --third-color: #FF9966;
    --fourth-color: #C19A6B;
    --footer-background: #1A1110;
    --contact-me-color: #6B4423;
    
    /* Toggle light color */
    --toggle-background-color: #FFE4E1;
    --toggle-contact-color: #79443B;
    --toggle-text-color: #3B3C36;
    --toggle2-text-color: rgb(59, 60, 54)
    --about-border-color: rgba(233, 116, 81, 0.4);
    --about2-border-color: rgba(149, 69, 53, 0.4);
    --about-light-hover-color: rgb(255, 228, 225)
    --about-dark-hover-color: rgb(121, 68, 59)
    --blur-color: rgba(233, 116, 81, 0.2);
}

html {
    scroll-behavior: smooth;
}

body {
    scroll-behavior: smooth;
    min-height: 100vh;
}
 `;