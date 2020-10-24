import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { Body } from 'components/Typography/Body'
import { Display } from 'components/Typography/Display'
import { HeadingSmall } from 'components/Typography/HeadingSmall'
import { useViewportSize } from 'components/useViewportSize'
import styled from 'styled-components'

const Container = styled(Flex)`
  padding: 24px 0;
`

const IconsContainer = styled(Flex)`
  margin: 24px 0;
`

const IconLink = styled(Link)`
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 50%;
  box-shadow: inset 0 0 0 35px #e6e6e6;
  display: flex;
  height: 50px;
  justify-content: center;
  line-height: 50px;
  margin: 0 8px;
  transition: color 0.3s;
  width: 50px;
`

const Icon = styled(FontAwesomeIcon)`
  color: #222;
  height: 30px;
`

export const Header = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'
  const leftAlign = viewportSize === 'small' ? 'center' : 'flex-start'
  const rightAlign = viewportSize === 'small' ? 'center' : 'flex-end'

  return (
    <Container align="center" as="header" direction={direction} justify="space-between">
      <Flex align={leftAlign}>
        <Display as="h1"> David Sorrentino</Display>
        <HeadingSmall as="h2">Frontend Architect &amp; Tech Lead</HeadingSmall>
      </Flex>

      <Flex align={rightAlign}>
        <IconsContainer direction="row">
          <IconLink href="//github.com/dapids" target="_blank">
            <Icon icon={faGithub} size="3x" />
          </IconLink>
          <IconLink href="//facebook.com/dapids" target="_blank">
            <Icon icon={faFacebook} size="3x" />
          </IconLink>
          <IconLink href="//instagram.com/dapids17" target="_blank">
            <Icon icon={faInstagram} size="3x" />
          </IconLink>
          <IconLink href="//linkedin.com/in/dapids" target="_blank">
            <Icon icon={faLinkedin} size="3x" />
          </IconLink>
          <IconLink href="//twitter.com/dapidsorrentino" target="_blank">
            <Icon icon={faTwitter} size="3x" />
          </IconLink>
        </IconsContainer>

        <div>
          <Body as="span">Email:</Body>{' '}
          <Body as="span" weight="500">
            <Link href="mailto:me@davidsorrentino.com">me@davidsorrentino.com</Link>
          </Body>
        </div>

        <Body>Location: Rome - Italy</Body>

        <div>
          <Body as="span">Company:</Body>
          {' '}
          <Body as="span" weight="500">
            <Link href="//www.prontopro.it" target="_blank">
              ProntoPro
            </Link>
          </Body>
        </div>
      </Flex>
    </Container>
  )
}
