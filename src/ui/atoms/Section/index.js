import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Skin = Styled.div`
  align-items: stretch;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 1200px) {
    & > * {
      opacity: ${({ visible }) => (visible ? 1 : 0)};
      transition: opacity .2s;
    }
  }
`

class Section extends Component {
  state = { visible: false }

  handleHide = () => {
    this.setState({ visible: false })
  }

  handleShow = () => {
    this.setState({ visible: true })
  }

  render() {
    const { background, children, color } = this.props
    const { visible } = this.state

    return (
      <Skin
        background={background}
        color={color}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        visible={visible}
      >
        {children}
      </Skin>
    )
  }
}

Section.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  color: PropTypes.string.isRequired,
}

export { default as SectionBody } from 'ui/atoms/Section/Body'

export default Section
