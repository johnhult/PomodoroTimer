import styled from "styled-components"
import Colors from "../../tokens/colors"

export const Button = styled.button`
  background-color: ${Colors.base};
  color: ${Colors.green};
  color: ${({ red }) => (red ? Colors.red : Colors.green)};
  height: 50px;
  padding: 10px 30px;
  border-radius: 50px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2),
    -5px -5px 10px 0 rgba(255, 255, 255, 1);
  cursor: pointer;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.2s;
  border-style: none;
  margin-bottom: 20px;
  &:active {
    box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2),
      0px 0px 0px 0 rgba(255, 255, 255, 1),
      inset 5px 5px 10px 0 rgba(0, 0, 0, 0.2),
      inset -5px -5px 10px 0 rgba(255, 255, 255, 1);
  }
  &:disabled {
    color: ${Colors.light};
    cursor: not-allowed;
  }
`
