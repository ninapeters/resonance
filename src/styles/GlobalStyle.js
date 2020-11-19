import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    margin: 0;
    font-size: 112.5%;
}

:root {
    --primary-light: #e6eded;
    --primary-dark: #2e3332;
}
`
