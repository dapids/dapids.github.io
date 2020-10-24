import styled from 'styled-components'

type Props = {
  weight?: '300' | '400' | '500'
}

export const Body = styled.div<Props>`
  font-size: 1.6rem;
  font-weight: ${({ weight }) => (weight ? weight : '300')};
`
