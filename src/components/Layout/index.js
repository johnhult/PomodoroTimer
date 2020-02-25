/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "src/components/Header"
import Flex from "../Flex"
import * as Styled from "./style"
import "./layout.css"
import twitter from "src/images/twitter.svg"
import insta from "src/images/insta.svg"
import medium from "src/images/medium.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Flex col style={{ flex: 1 }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Styled.Main>{children}</Styled.Main>
      <Styled.Footer>
        <Styled.MadeBy>Made with ❤️ by @iamjohnhult</Styled.MadeBy>
        <Styled.Social>
          <Styled.SocialButton
            href="https://twitter.com/iamjohnhult"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter}></img>
          </Styled.SocialButton>
          <Styled.SocialButton
            href="https://instagram.com/iamjohnhult/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta}></img>
          </Styled.SocialButton>
          <Styled.SocialButton
            href="https://medium.com/@iamjohnhult"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium}></img>
          </Styled.SocialButton>
        </Styled.Social>
      </Styled.Footer>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
