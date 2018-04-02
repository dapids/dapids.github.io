import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Skin = Styled.div`
  align-items: center;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  justify-content: center;
  padding: 16px 120px;

  & > * {
    opacity: 0;
    transition: opacity .2s;
  }

  &:hover > * {
    opacity: 1;
  }
`

const Section = ({ background, children, color }) => (
  <Skin
    background={background}
    color={color}
  >
    {children}
  </Skin>
)

Section.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  color: PropTypes.string.isRequired,
}

export { default as SectionBody } from 'UI/atoms/Section/Body'

export default Section
