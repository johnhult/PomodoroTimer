import PropTypes from "prop-types"
import React from "react"

import * as Styled from "./style"

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.Container>
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      <Styled.Link
        href={"https://medium.com/p/e518f7d8a9fa/edit"}
        target="_blank"
        rel="noopener noreferrer"
      >
        What's a Pomodoro Timer?
      </Styled.Link>
    </Styled.Container>
  </Styled.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
