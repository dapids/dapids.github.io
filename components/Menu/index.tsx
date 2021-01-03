import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { useViewportSize } from 'hooks/useViewportSize'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { debounce } from 'ts-debounce'

const Separator = styled.div`
  margin: 0 8px;
  position: relative;

  &::after {
    content: '|';
    left: -2px;
    position: absolute;
    right: 0;
    top: 0;
  }
`

type WrapperProps = {
  scrolled: boolean
}

const Wrapper = styled.div<WrapperProps>`
  background: ${({ scrolled }) => (scrolled ? '#e6e6e6' : '#222')};
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
  transition: all 0.3s;
  z-index: 10;
`

const Container = styled(Flex).attrs({
  direction: 'row',
})`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 8px;
`

type InnerProps = {
  scrolled: boolean
  small: boolean
}

const Inner = styled(Flex).attrs({
  direction: 'row',
})<InnerProps>`
  flex-grow: ${({ scrolled, small }) => (small || scrolled ? 1 : 0)};
  font-size: 1.6rem;
  justify-content: space-around;
  padding: 8px;
  transition: all 0.3s;

  & > a {
    color: ${({ scrolled }) => (scrolled ? '#222' : '#e6e6e6')};
  }
`

const isWindowScrolled = () => (typeof window === 'undefined' ? false : window.scrollY > 16)

export const Menu = () => {
  const viewportSize = useViewportSize()
  const [scrolled, setScrolled] = useState(isWindowScrolled())

  const onScroll = useCallback(
    debounce(() => {
      setScrolled(isWindowScrolled())
    }, 50),
    [],
  )

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Wrapper scrolled={scrolled}>
      <Container>
        <Inner scrolled={scrolled} small={viewportSize === 'small'}>
          <Link href="#about-me">About me</Link>
          <Separator />
          <Link href="#experience">Experience</Link>
          <Separator />
          <Link href="#education">Education</Link>
          <Separator />
          <Link href="#talks">Talks</Link>
        </Inner>
      </Container>
    </Wrapper>
  )
}
