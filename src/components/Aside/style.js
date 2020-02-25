import styled, { css } from "styled-components"
import Button from "../Button"
import Breaks from "src/tokens/breakpoints"
import Flex from "../Flex"
import Colors from "../../tokens/colors"

export const Aside = styled.aside`
  height: 100%;
  margin-right: 0;
  width: 100%;
  @media all and (min-width: ${Breaks.tablet}) {
    width: 270px;
    margin-right: 60px;
    flex: 0 0 0;
  }
`

export const PomodorosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 16%);
  justify-content: space-between;
  row-gap: 20px;
  column-gap: 3%;
  margin-bottom: 30px;
`

export const Img = styled.img`
  width: 100%;
  opacity: ${({ lowOpa }) => lowOpa && 0.2};
  transition: 0.2s;
  flex-shrink: 0;
  margin: 0;
`

export const Wrapper = styled.div`
  position: relative;
  padding: 15px;
  margin: -15px 0 0 -15px;
  overflow: hidden;
  display: flex;
  width: calc(30px + 100%);
  align-items: center;
`

export const Flexer = styled(Flex)`
  transition: 0.2s;
  width: 100%;
  button {
    margin-bottom: 0;
  }
  ${({ modalOpen }) =>
    css`
      transform: ${modalOpen
        ? "translateY(calc(30px + 100%))"
        : "translateY(0)"};
    `}
`

export const ModalFlexer = styled(Flex)`
  transition: 0.2s, width 0s;
  position: absolute;
  height: 50px;
  ${({ modalOpen, animateToW }) =>
    css`
      transform: ${modalOpen
        ? "translateY(0)"
        : "translateY(calc( -30px - 100%))"};
      width: ${`${animateToW}px`};
    `}
`

export const ResetButton = styled(Button)`
  width: 200px;
  margin-right: 20px;
  flex: 1;
`

export const Modal = styled.form`
  display: flex;
  margin: 0;
  padding: 0;
  input {
    width: 100%;
    outline: 0;
    margin-right: 20px;
    background-color: ${Colors.base};
    padding: 10px;
    border-radius: 10px;
    border-style: none;
    box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2),
      0px 0px 0px 0 rgba(255, 255, 255, 1),
      inset 5px 5px 10px 0 rgba(0, 0, 0, 0.2),
      inset -5px -5px 10px 0 rgba(255, 255, 255, 1);
  }
`

export const ErrorMsg = styled.span`
  color: ${Colors.red};
`
