import { Caption } from 'components/Typography/Caption'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 2px dashed #e6e6e6;
  padding-top: 16px;
  text-align: center;
`

export const Footer = () => (
  <Wrapper>
    <Caption as="span" weight="400">
      Backed with ❤️, TypeScript, Next.js, React, styled-components. Hosted on Vercel.
    </Caption>
  </Wrapper>
)
