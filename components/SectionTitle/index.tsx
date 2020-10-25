import { Heading as HeadingBase } from 'components/Typography/Heading'
import styled from 'styled-components'

const Heading = styled(HeadingBase)`
  margin-bottom: 48px;
  margin-top: 16px;
  padding-bottom: 12px;
  position: relative;
  text-align: center;

  &::after {
    content: '';
    border-bottom: 2px dashed #ccc;
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
  }
`

export const SectionTitle = ({ children }: { children: string }) => (
  <Heading>{children}</Heading>
)
