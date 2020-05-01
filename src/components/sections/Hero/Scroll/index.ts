import styled, { keyframes } from 'styled-components'
import { palette } from 'ui/tokens/palette'

const move = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -200%);
  }

  to {
    opacity: .2;
    transform: translate(-50%, 100%);
  }
`

const Scroll = styled.a`
  border: 2px solid ${palette.whiteDark};
  border-radius: 16px;
  display: block;
  height: 40px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 24px;

  :after {
    animation: ${move} 1.8s infinite ease-in-out;
    background-color: ${palette.whiteDark};
    border-radius: 50%;
    content: '';
    display: block;
    height: 7px;
    left: 50%;
    position: absolute;
    top: 50%;
    width: 7px;
  }
`

export { Scroll }
