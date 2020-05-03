import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { palette } from 'ui/tokens/palette'

type TSkinParams = {
  visible: boolean
}

const Skin = styled.a<TSkinParams>`
  background-color: ${palette.black};
  bottom: 24px;
  display: block;
  height: 44px;
  opacity: ${({ visible }) => visible ? '1' : '0'};
  ${(visible) => visible ? '' : 'pointer-events: none;'}
  position: fixed;
  right: 24px;
  transition: all .4s ease-in-out;
  width: 44px;
`

type TParams = {
  href: string
}

const ToTop = ({ href }: TParams) => {
  const [visible, setVisible] = useState(false)

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > window.innerHeight / 2)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Skin href={href} visible={visible} />
  )
}

export { ToTop }
