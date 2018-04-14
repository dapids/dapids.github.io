import React, { Component } from 'react'
import Styled from 'styled-components'
import me from 'assets/me.jpg'

const Container = Styled.div`
  border-radius: 50%;
  height: 150px;
  left: 50%;
  perspective: 1000px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  z-index: 100;

  @media screen and (min-width: 1200px) {
    > div {
      ${({ flip }) => (flip ? 'transform: rotateY(180deg);' : '')}
    }
  }

  @media screen and (max-width: 600px) {
    height: 100px;
    width: 100px;
  }

  @media screen and (max-width: 480px) {
    height: 70px;
    width: 70px;
  }
`

const Flipper = Styled.div`
  border-radius: 50%;
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
  cursor: pointer;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Back = Coin.extend`
  background: ${({ theme }) => theme.accentLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transform: rotateY(180deg);
`

const BackTitle = Styled.h1`
  color: ${({ theme }) => theme.primaryLight};
  font-size: 18px;
  margin: 0;
`

const BackSubtitle = Styled.h2`
  color: ${({ theme }) => theme.secondary};
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

class Picture extends Component {
  state = { flip: false }

  handleToggle = () => {
    const { flip } = this.state

    this.setState({ flip: !flip })
  }

  render() {
    const { flip } = this.state

    return (
      <Container flip={flip} onClick={this.handleToggle}>
        <Flipper>
          <Front />

          <Back>
            <BackTitle>David Sorrentino</BackTitle>
            <BackSubtitle>Web Engineer</BackSubtitle>
          </Back>
        </Flipper>
      </Container>
    )
  }
}

export default Picture
