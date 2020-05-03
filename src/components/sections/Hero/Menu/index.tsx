import React from 'react'
import styled from 'styled-components'
import { Content } from 'ui/atoms/Content'
import { palette } from 'ui/tokens/palette'

const Skin = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  position: sticky;
`

const Items = styled.div`
  display: flex;
`

const Item = styled.a`
  color: ${palette.whiteDark};
  display: block;
  font-size: 13px;
  font-weight: bold;
  padding: 12px 16px;
  position: relative;
  text-transform: uppercase;

  :after {
    background-color: ${palette.whiteDark};
    bottom: 0;
    content: '';
    height: 2px;
    left: 10%;
    position: absolute;
    transition: all .2s ease-in-out;
    width: 0;
  }

  &:hover :after {
    width: 80%;
  }
`

const Home = styled.a`
  color: ${palette.whiteDark};
  display: block;
  font-size: 20px;
  text-transform: none;
`

const items = [
  {
    anchor: '#about',
    text: 'About'
  },
  {
    anchor: '#work',
    text: 'Work'
  },
  {
    anchor: '#contact',
    text: 'Contact'
  },
]

const Menu = () => (
  <Content>
    <Skin>
      <Home href="#hero">Dapids</Home>

      <Items>
        { items.map(({ anchor, text }) => (
          <Item href={anchor} key={anchor} >{ text }</Item>
        )) }
      </Items>
    </Skin>
  </Content>
)

export { Menu }
