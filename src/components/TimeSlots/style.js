import styled from "styled-components"
import Flex from "../Flex"
import IconButton from "../IconButton"
import Colors from "../../tokens/colors"
import Button from "../Button"

export const Flexer = styled(Flex)``

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`

export const ResetButton = styled(Button)`
  color: ${Colors.red};
  margin-right: 10px;
  flex-shrink: 0;
`

export const ShowOrHide = styled.span`
  margin-bottom: 20px;
  margin-right: 5px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
`

export const MinWrapper = styled(Flex)`
  margin-left: auto;
  width: auto;
  align-items: center;
`

export const ShowMin = styled(Button)`
  background-color: ${({ minimalisticView }) =>
    minimalisticView ? Colors.red : Colors.green};
  border-radius: 20px;
  color: ${Colors.red};
  box-shadow: inset 5px 5px 10px 0 rgba(0, 0, 0, 0.3),
    inset -5px -5px 10px 0 rgba(255, 255, 255, 0.6);
  width: 80px;
  padding: 10px;
  transition: 0.4s;
  &:active {
    box-shadow: inset 5px 5px 10px 0 rgba(0, 0, 0, 0.3),
      inset -5px -5px 10px 0 rgba(255, 255, 255, 0.6);
  }
`

export const Toggle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.3),
    -3px -3px 6px 0 rgba(255, 255, 255, 0.6);
  transform: ${({ minimalisticView }) =>
    minimalisticView && "translateX(30px)"};
  transition: 0.4s;
`

export const DnDWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 50px;
  margin-right: 15px;
`

export const DragButton = styled(IconButton)`
  margin-bottom: 0;
  border-radius: 20px;
  img {
    size: 10px;
    pointer-events: none;
  }
`

export const TextArea = styled.textarea`
  resize: none;
  width: 0;
  flex: 1;
  height: 100px;
  outline: 0;
  background-color: ${Colors.base};
  padding: 10px;
  border-radius: 10px;
  border-style: none;
  font-family: monospace;
  color: ${Colors.text};
  box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2),
    0px 0px 0px 0 rgba(255, 255, 255, 1),
    inset 5px 5px 10px 0 rgba(0, 0, 0, 0.2),
    inset -5px -5px 10px 0 rgba(255, 255, 255, 1);
  box-shadow: ${({ done }) => done && "none"};
  border: ${({ done }) => done && `1px solid ${Colors.light}`};
  opacity: ${({ done }) => done && 0.4};
  transition: 0.2s;
  &:hover,
  &:active {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
    box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2),
      0px 0px 0px 0 rgba(255, 255, 255, 1),
      inset 5px 5px 10px 0 rgba(0, 0, 0, 0.2),
      inset -5px -5px 10px 0 rgba(255, 255, 255, 1);
  }
`

export const CountTasks = styled.h2`
  font-size: 20px;
  margin-right: 5px;
  margin-bottom: 10px;
`

export const DoneText = styled.h2`
  margin-right: 10px;
  margin-bottom: 0;
`
