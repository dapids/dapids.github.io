import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Box = Styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`

const Text = Styled.div`
  font-size: 16px;
`

const Title = Styled.h2`
  font-size: 24px;
  margin: 0 0 8px;
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
