import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Box = Styled.div`
  text-align: center;
`

const Text = Styled.div`
  font-size: 16px;
`

const Title = Styled.h2`
  font-size: 24px;
  text-transform: uppercase;
`

const Body = ({ children, title }) => (
  <Box>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Box>
)

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

export default Body
