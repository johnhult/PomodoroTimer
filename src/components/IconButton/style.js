import styled from "styled-components"
import Colors from "../../tokens/colors"

export const Button = styled.button`
  background-color: ${Colors.base};
  height: 50px;
  width: 50px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2),
    -5px -5px 10px 0 rgba(255, 255, 255, 1);
  cursor: pointer;
  outline: none;
  transition: 0.2s;
  border-style: none;
  margin-bottom: 20px;
  position: relative;
  flex: 0 0 auto;
  img {
    width: 50%;
    margin-bottom: 0;
  }
  &:active,
  &.active {
    box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2),
      0px 0px 0px 0 rgba(255, 255, 255, 1),
      inset 5px 5px 10px 0 rgba(0, 0, 0, 0.2),
      inset -5px -5px 10px 0 rgba(255, 255, 255, 1);
  }
`
