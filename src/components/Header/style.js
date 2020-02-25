import styled from "styled-components"
import Colors from "src/tokens/colors"
import { Button } from "../Button/style"

export const Header = styled.header`
  padding: 20px 5%;
  background-color: ${Colors.base};
  text-align: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

export const Link = styled.a`
  color: ${Colors.green};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  &:visited {
    color: ${Colors.green};
  }
`
