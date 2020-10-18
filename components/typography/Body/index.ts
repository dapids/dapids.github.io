import styled from 'styled-components'

type Props = {
  bold?: boolean
}

export const Body = styled.div<Props>`
  font-size: 1.6rem;
  font-weight: ${({ bold }) => (bold ? '500' : '300')};
`
