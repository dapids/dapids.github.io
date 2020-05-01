import React from 'react'
import styled from 'styled-components'
import { Menu } from 'components/sections/Hero/Menu'
import { Scroll } from 'components/sections/Hero/Scroll'

const Skin = styled.div`
  align-items: stretch;
  background-color: #222;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

const ScrollWrapper = styled.div`
  padding-bottom: 40px;
`

const Hero = () => (
  <Skin>
    <Menu />

    <ScrollWrapper>
      <Scroll href="#" />
    </ScrollWrapper>
  </Skin>
)

export { Hero }
