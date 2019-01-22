// import { StaticQuery, graphql } from 'gatsby'
// import Header from './header'
import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/globals/navbar'
import './bootstrap.min.css';
import './layout.css'

const Layout = ({children}) => {
  return (
    <React.Fragment>
    <Navbar />
    {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
