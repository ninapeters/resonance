import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: 'Quicksand', sans-serif;
    font-size: 112.5%;
    margin: 0;
    position: relative;
}

:root {
    --primary-light: #679FBE;
    --primary-regular: #296281;
    --primary-dark: #3C3C3C;
    --primary-dark-transparent: #3C3C3CBF;
    --secondary: #B261A0;
    --white: #FFF;
    --white-transparent: #FFFFFFF2;
    --spotify-green: #08DA73;
    --spotify-green-transparent: #08DA7333;
    --cta-red: #FF6262;
    --shadow-light: 0 0 2px #10193366;
    --shadow-dark: 0 0 3px #23364399;
    --gradient-light: linear-gradient(200deg, #A7669D 0%, #739EBB 70%);
}
`
