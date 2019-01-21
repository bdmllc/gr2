import React from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'
// import Header from './header'

import './layout.css'

const Layout = ({children}) => {
  return (
    <React.Fragment>{children}</React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
