import { Container as ContainerBase } from 'components/Container'
import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { useScrolled } from 'hooks/useScrolled'
import { useViewportSize } from 'hooks/useViewportSize'
import styled from 'styled-components'

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

const Container = styled(ContainerBase)`
  display: flex;
  padding: 8px 0;
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
  justify-content: space-between;
  padding: 8px;
  transition: all 0.3s;

  & > a {
    color: ${({ scrolled }) => (scrolled ? '#222' : '#e6e6e6')};
    margin: 0 8px;
    position: relative;

    &::after {
      content: '|';
      display: ${({ scrolled, small }) => (small || scrolled ? 'none' : 'visible')};
      left: -10px;
      position: absolute;
      right: 0;
      top: 0;
    }

    &:first-child::after {
      display: none;
    }
  }
`

export const Menu = () => {
  const viewportSize = useViewportSize()
  const scrolled = useScrolled()

  return (
    <Wrapper scrolled={scrolled}>
      <Container>
        <Inner scrolled={scrolled} small={viewportSize === 'small'}>
          <Link href="#about-me">About me</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#talks">Talks</Link>
          <Link href="#education">Education</Link>
        </Inner>
      </Container>
    </Wrapper>
  )
}
