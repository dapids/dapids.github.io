import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Content as ContentBase } from 'ui/atoms/Content'
import { palette } from 'ui/tokens/palette'

type TSkin = {
  scrolled: boolean
}

const Skin = styled.nav<TSkin>`
  background-color: ${({ scrolled }) => scrolled ? palette.white : 'transparent'};
  border-bottom: 1px solid ${({ scrolled }) => scrolled ? palette.whiteDark : 'transparent'};
  color: ${({ scrolled }) => scrolled ? palette.black : palette.whiteDark};
  left: 0;
  padding: ${({ scrolled }) => scrolled ? '12px 0' : '24px 0'};
  position: fixed;
  right: 0;
  top: 0;
  transition: all .4s ease-in-out;
  transform: translateZ(0);
  z-index: 1;
`

const Content = styled(ContentBase)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Items = styled.div`
  display: flex;
`

type TItemParams = {
  scrolled: boolean
}

const Item = styled.a<TItemParams>`
  color: inherit;
  display: block;
  font-size: 13px;
  font-weight: bold;
  padding: 12px 16px;
  position: relative;
  text-transform: uppercase;

  :after {
    background-color: ${({ scrolled }) => scrolled ? palette.black : palette.whiteDark};
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
  color: inherit;
  display: block;
  font-size: 20px;
  font-weight: bold;
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

const Menu = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Skin scrolled={scrolled}>
      <Content>
        <Home href="#hero">Dapids</Home>

        <Items>
          { items.map(({ anchor, text }) => (
            <Item href={anchor} key={anchor} scrolled={scrolled}>{text}</Item>
          )) }
        </Items>
      </Content>
    </Skin>
  )
}

export { Menu }
