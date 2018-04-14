import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'constants/style'
import Home from 'UI/pages/Home'

const App = () => (
  <ThemeProvider theme={theme.dark}>
    <Home />
  </ThemeProvider>
)

export default App
