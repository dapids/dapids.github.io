import { createGlobalStyle } from 'styled-components'
import { palette } from 'ui/tokens/palette'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    color: ${palette.black};
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`

export { GlobalStyle }
