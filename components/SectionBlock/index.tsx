import { Flex } from 'components/Flex'
import { Body } from 'components/Typography/Body'
import { HeadingSmall as HeadingSmallBase } from 'components/Typography/HeadingSmall'
import { useViewportSize } from 'hooks/useViewportSize'
import { ReactChild } from 'react'
import styled from 'styled-components'

type WrapperProps = {
  last?: boolean
}

const Wrapper = styled(Body).attrs({
  weight: '400',
})<WrapperProps>`
  margin-bottom: ${({ last }) => (last ? '0' : '32px')};
  margin-top: 0;
  padding-bottom: ${({ last }) => (last ? '16px' : '32px')};
  position: relative;

  &::after {
    border-bottom: 1px dashed #aaa;
    bottom: 0;
    content: '';
    display: ${({ last }: WrapperProps) => (last ? 'none' : 'visible')};
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`

const Information = styled(Flex)`
  margin-bottom: 16px;
`

const HeadingSmall = styled(HeadingSmallBase)`
  margin-bottom: 0px;
`

type Props = {
  children: ReactChild
  last?: boolean
  primaryInformation: string
  secondaryInformation: string
  subtitle: string
  title: string
}

export const SectionBlock = ({
  children,
  last = false,
  primaryInformation,
  secondaryInformation,
  subtitle,
  title,
}: Props) => {
  const viewportSize = useViewportSize()
  const wrap = viewportSize === 'small' ? 'wrap' : 'nowrap'

  return (
    <Wrapper last={last}>
      <Flex direction="row" wrap={wrap}>
        <Information basis="360px" grow="0" shrink="0">
          <HeadingSmall weight="500">{title}</HeadingSmall>
          <Body weight="500">{subtitle}</Body>
          <Body>{primaryInformation}</Body>
          <Body>{secondaryInformation}</Body>
        </Information>

        <Flex grow="1" shrink="1">
          {children}
        </Flex>
      </Flex>
    </Wrapper>
  )
}
