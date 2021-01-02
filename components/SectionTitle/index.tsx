import { Heading as HeadingBase } from 'components/Typography/Heading'
import styled from 'styled-components'

const Heading = styled(HeadingBase)`
  margin-bottom: 48px;
  margin-top: 32px;
  padding-bottom: 12px;
  padding-top: 12px;
  position: relative;
  text-align: center;

  &::before,
  &::after {
    content: '';
    left: 0;
    position: absolute;
    width: 100%;
  }

  &::before {
    border-top: 2px dashed #ccc;
    top: 0;
  }

  &::after {
    border-bottom: 2px dashed #ccc;
    bottom: 0;
  }
`

export const SectionTitle = ({ children }: { children: string }) => <Heading>{children}</Heading>
