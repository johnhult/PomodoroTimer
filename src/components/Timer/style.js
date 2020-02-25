import styled from "styled-components"
import Flex from "../Flex"
import Button from "../Button"
import Colors from "../../tokens/colors"
import Breaks from "../../tokens/breakpoints"

export const Flexer = styled(Flex)`
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${Colors.light};
`
export const Time = styled.h1`
  font-size: 10vw;
  font-family: monospace;
  background: ${Colors.gradient};
  background-clip: text;
  color: ${Colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media all and (min-width: ${Breaks.maxed}) {
    font-size: 96px;
  }
`

export const Btn = styled(Button)`
  width: 200px;
`
