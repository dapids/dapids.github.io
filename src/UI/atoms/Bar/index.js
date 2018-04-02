import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Skin = Styled.div`
  align-items: center;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Bar = ({ background, children, color }) => (
  <Skin
    background={background}
    color={color}
  >
    {children}
  </Skin>
)

Bar.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  color: PropTypes.string.isRequired,
}

export { default as BarItem } from 'UI/atoms/Bar/Item'

export default Bar
