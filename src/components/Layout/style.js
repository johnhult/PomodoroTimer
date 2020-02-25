import styled from "styled-components"
import Colors from "../../tokens/colors"
import Flex from "../Flex"

export const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  padding: 0px 5% 20px;
  background-color: ${Colors.base};
  width: 100%;
`

export const Footer = styled.footer`
  padding: 40px 5%;
  text-align: center;
  font-weight: 700;
  background-color: ${Colors.base};
  color: ${Colors.text};
`

export const MadeBy = styled.span`
  margin-bottom: 20px;
  display: block;
`

export const SocialButton = styled.a`
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
  margin-bottom: 0;
  &:not(:last-child) {
    margin-right: 20px;
  }
`

export const Social = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: 0 auto;
`
