import styled from 'styled-components'

type Props = {
  align?: 'center' | 'flex-end' | 'flex-start' | 'stretch'
  basis?: string
  direction?: 'column' | 'row'
  grow?: '0' | '1'
  justify?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
  shrink?: '0' | '1'
  wrap?: 'nowrap'
}

export const Flex = styled.div<Props>`
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  display: flex;
  flex-basis: ${({ basis }) => (basis ? basis : 'auto')};
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'nowrap')};
  flex-grow: ${({ grow }) => (grow ? grow : '0')};
  flex-shrink: ${({ shrink }) => (shrink ? shrink : '0')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  min-height: 0;
  min-width: 0;
`
