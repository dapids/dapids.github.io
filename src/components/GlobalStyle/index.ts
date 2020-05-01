import { createGlobalStyle } from 'styled-components'
import { palette } from 'ui/tokens/palette'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    color: ${palette.black};
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`

export { GlobalStyle }
