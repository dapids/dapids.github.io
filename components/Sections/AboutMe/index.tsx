import { Flex } from 'components/Flex'
import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'
import { useViewportSize } from 'components/useViewportSize'
import styled from 'styled-components'

const PictureWrapper = styled(Flex).attrs({
  shrink: '0',
})`
  margin: 0 auto 32px;
  padding: 0 40px;
`

const Picture = styled.div`
  background-image: url('/my-picture.jpg');
  background-position: center;
  background-repeat: repeat, no-repeat;
  background-size: cover;
  border: 4px solid #ccc;
  border-radius: 100px;
  display: block;
  height: 200px;
  width: 200px;
`

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  margin-bottom: 4px;
`

export const AboutMe = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'

  return (
    <>
      <SectionTitle>About me</SectionTitle>
      <Flex direction={direction}>
        <PictureWrapper>
          <Picture />
        </PictureWrapper>
        <Flex grow="1" shrink="1">
          <Paragraph>
            Hi! My name is David. 👋🏻
          </Paragraph>
          <Paragraph>
            I'm a Frontend Architect and a Software Development enthusiast.
          </Paragraph>
          <Paragraph>
            At the moment, I'm mainly working with: TypeScript, React, React Native, Redux, Reselect, Immutable.js, Next.js, Node.js, Jest, Webpack.
          </Paragraph>
          <Paragraph>
            In my life I had the chance to live in the following towns and I feel so lucky about it: Sant'Antonio Abate 🇮🇹, Urbino 🇮🇹, Camerino 🇮🇹, Reykjavik 🇮🇸, Kalisz 🇵🇱, Poznan 🇵🇱, Warsaw 🇵🇱, Ancona 🇮🇹, Milan 🇮🇹, Rome 🇮🇹.
          </Paragraph>
          <Paragraph>
            In 2019 I married Laura, a very special Roman woman.
          </Paragraph>
        </Flex>
      </Flex>
    </>
  )
}
