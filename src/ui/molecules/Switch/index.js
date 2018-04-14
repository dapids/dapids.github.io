import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Styled from 'styled-components'
import { toggleLight as toggleLightAction } from 'model/actions/light'
import { lightSelector } from 'model/selectors/light'

const Button = Styled.button`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  position: absolute;
  right: 8px;
  top: 16px;
  z-index: 100;

  &:hover {
    cursor: pointer;
  }
`

const Icon = Styled.i`
  color: ${({ theme }) => theme.text.accent};
  font-size: 32px;

  @media (min-width: 1200px) {
    color: ${({ theme }) => theme.text.primary};
  }
`

const Switch = ({ light, toggleLight }) => (
  <Button onClick={toggleLight}>
    <Icon className={`${light ? 'fas' : 'far'} fa-lightbulb`} />
  </Button>
)

Switch.propTypes = {
  light: PropTypes.bool.isRequired,
  toggleLight: PropTypes.func.isRequired,
}

const selectLight = lightSelector()

const mapStateToProps = state => ({
  light: selectLight(state),
})

const mapDispatchToProps = dispatch => ({
  toggleLight: () => dispatch(toggleLightAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Switch)
