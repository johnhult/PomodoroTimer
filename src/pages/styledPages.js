import styled from "styled-components"
import Flex from "../components/Flex"
import Breaks from "src/tokens/breakpoints"
import Colors from "src/tokens/colors"

export const Flexer = styled(Flex)`
  flex-direction: column;
  @media all and (min-width: ${Breaks.tablet}) {
    flex-direction: row;
  }
`

export const Prompt = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  text-align: center;
  padding: 20px;
  background-color: ${Colors.base};
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  button {
    margin-bottom: 0;
  }
`
