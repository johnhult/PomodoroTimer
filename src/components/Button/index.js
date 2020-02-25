import React from "react"
import PropTypes from "prop-types"

import * as Styled from "./style"

export const Button = ({ onClick, children, ...props }) => {
  return (
    <Styled.Button onClick={onClick} {...props}>
      {children}
    </Styled.Button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button
