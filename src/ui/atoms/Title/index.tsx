import React from 'react'
import styled from 'styled-components'
import { palette } from 'ui/tokens/palette'

const Skin = styled.div`
  text-align: center;
`

const Children = styled.h2`
  display: inline-block;
  font-size: 36px;
  margin-bottom: 48px;
  margin-top: 0;
  padding-top: 88px;
  position: relative;

  :after {
    background-color: ${palette.black};
    bottom: -8px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    width: 50%;
  }
`

type TProps = {
  children: string
  id: string
}

const Title = ({ children, id }: TProps) => (
  <Skin>
    <Children id={id}>{children}</Children>
  </Skin>
)

export { Title }
