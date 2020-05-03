import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Content } from 'ui/atoms/Content'
import { Title } from 'ui/atoms/Title'

type TBackground = 'gray' | 'white'

type TSkinParams = {
  background: TBackground
}

const Skin = styled.div<TSkinParams>`
  background-color: ${({ background }) => background === 'white' ? '#ffffff' : '#fafafa'};
  padding-bottom: 100px;
`

type TParams = {
  background: TBackground
  children: ReactNode
  id: string
  title: string
}

const Section = ({ background, children, id, title }: TParams) => (
  <Skin background={background}>
    <Content>
      <Title id={id}>{title}</Title>

      {children}
    </Content>
  </Skin>
)

export { Section }
