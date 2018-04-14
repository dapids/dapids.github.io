import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Box = Styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  text-decoration: none;
`

const Icon = Styled.i`
  font-size: 20px;
`

const Text = Styled.span`
  font-size: 13px;
  padding: 8px;
  text-align: center;
`

const Item = ({ children, icon, url }) => (
  <Box
    href={url}
    target="_blank"
  >
    <Icon className={icon} />
    <Text>{children}</Text>
  </Box>
)

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Item
