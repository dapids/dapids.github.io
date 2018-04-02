import React from 'react'
import Styled from 'styled-components'
import { palette } from 'constants/palette'
import me from 'assets/me.jpg'

const Container = Styled.div`
  height: 150px;
  left: 50%;
  perspective: 1000px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 150px;

  &:hover {
    > div {
      transform: rotateY(180deg);
    }
  }
`

const Flipper = Styled.div`
  height: 100%;
  position: absolute;
  transition: 0.6s;
  transform-style: preserve-3d;
  width: 100%;
`

const Coin = Styled.div`
  backface-visibility: hidden;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Back = Coin.extend`
  background: ${palette.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transform: rotateY(180deg);
`

const BackTitle = Styled.h1`
  color: ${palette.darkGray};
  font-size: 18px;
  margin: 0;
`

const BackSubtitle = Styled.h2`
  color: ${palette.gray};
  font-size: 16px;
  margin: 0;
`

const Front = Coin.extend`
  background: url(${me});
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateY(0deg);
  z-index: 2;
`

const Picture = () => (
  <Container>
    <Flipper>
      <Front />

      <Back>
        <BackTitle>David Sorrentino</BackTitle>
        <BackSubtitle>Web Engineer</BackSubtitle>
      </Back>
    </Flipper>
  </Container>
)

export default Picture
