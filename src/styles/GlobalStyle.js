import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    font-size: 112.5%;
    margin: 0;
}

:root {
    --primary-light: #e6eded;
    --primary-dark: #2e3332;
}
`
