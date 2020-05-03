import React from 'react'
import styled from 'styled-components'
import { Scroll } from 'components/sections/Hero/Scroll'

const Skin = styled.div`
  align-items: stretch;
  background-color: #222;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
`

const ScrollWrapper = styled.div`
  padding-bottom: 40px;
`

const Hero = () => (
  <Skin id="hero">
    <ScrollWrapper>
      <Scroll href="#about" />
    </ScrollWrapper>
  </Skin>
)

export { Hero }
