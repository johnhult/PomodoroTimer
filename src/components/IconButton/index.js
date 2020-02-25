import React from "react"
import PropTypes from "prop-types"

import * as Styled from "./style"

export const IconButton = ({ onClick, src, children, ...props }) => {
  return (
    <Styled.Button onClick={onClick} {...props}>
      <img src={src}></img>
      {children}
    </Styled.Button>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
}

export default IconButton
