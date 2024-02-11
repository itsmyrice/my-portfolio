import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Outfit", Arial, Helvetica, sans-serif;
}

:root {
    /* Colors */
    --text-color: #fff;
    --background-color: #3D2B1F;
    --dark-color: #635147;
    --light-dark-color: #926644;
    --primary-color: #FFE4E1;
    --secondary-color: #FBCEB1;
    --third-color: #FF9966;
    --fourth-color: #C19A6B;
    /* Fonts */
    --font-roboto: "Roboto";
}

html {
    scroll-behavior: smooth;
}
 `;

