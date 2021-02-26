import { Caption } from 'components/Typography/Caption'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 2px dashed #e6e6e6;
  margin-top: 32px;
  padding-top: 16px;
  text-align: center;
`

export const Footer = () => (
  <Wrapper>
    <Caption as="span" weight="400">
      Backed with ❤️, TypeScript, React, styled-components, Next.js. Hosted on Vercel.
    </Caption>
  </Wrapper>
)
