import React from "react"

import * as Styled from "./style"

export const Flex = ({ col, wr, children, ...props }) => {
  return (
    <Styled.Container ref={props.forwardRef} col={col} wr={wr} {...props}>
      {children}
    </Styled.Container>
  )
}

export default Flex
