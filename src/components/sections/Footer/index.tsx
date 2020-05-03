import React from 'react'
import styled from 'styled-components'
import { Content } from 'ui/atoms/Content'

const Skin = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  position: relative;
`

const Row = styled.div`
  padding: 12px 0;
  text-align: center;
`

const Name = styled(Row)`
  font-size: 22px;
  font-weight: bold;
`

const Footer = () => {
  const currentYear = (new Date()).getFullYear()

  return (
    <Skin>
      <Name>David Sorrentino © {currentYear}</Name>

      <Row>social icons here</Row>

      <Content>
        <Row>Baked with ❤️, TypeScript, React, Styled Components, Gatsby.</Row>
      </Content>
    </Skin>
  )
}

export { Footer }
