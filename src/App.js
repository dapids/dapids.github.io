import React from 'react'
import PropTypes from 'prop-types'
import { connect, Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from 'constants/style'
import { lightSelector } from 'model/selectors/light'
import Home from 'ui/pages/Home'

const App = ({ light, store }) => (
  <Provider store={store}>
    <ThemeProvider theme={light ? theme.light : theme.dark}>
      <Home />
    </ThemeProvider>
  </Provider>
)

App.propTypes = {
  light: PropTypes.bool.isRequired,
  store: PropTypes.shape().isRequired,
}

const selectLight = lightSelector()

const mapStateToProps = state => ({
  light: selectLight(state),
})

export default connect(mapStateToProps)(App)
