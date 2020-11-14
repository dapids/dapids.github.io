import styled from 'styled-components'

type Props = {
  fontStyle?: 'italic'
  weight?: '300' | '400' | '500'
}

export const HeadingSmall = styled.div<Props>`
  font-size: 2rem;
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : 'normal')};
  font-weight: ${({ weight }) => (weight ? weight : '300')};
  line-height: 1.2;
  margin: 0 0 0.75rem;
`
