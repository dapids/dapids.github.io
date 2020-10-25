import styled from 'styled-components'

type Props = {
  weight?: '300' | '400' | '500'
}

export const Caption = styled.div<Props>`
  font-size: 1.4rem;
  font-weight: ${({ weight }) => (weight ? weight : '300')};
`
