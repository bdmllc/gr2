import React from 'react'
import styled from 'styled-components'
import {StaticQuery,graphql} from 'gatsby'
import {styles,Section} from '../../utils'
import Img from 'gatsby-image'

const SINGLE_IMAGE = graphql `
{
  img1: file(relativePath: {eq: "homeGallery/img-1.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default function Gallery() {
  return ( <
    StaticQuery query = {SINGLE_IMAGE}
    render = {
      data => <Img fluid={data.img1.childImageSharp.fluid} />}
    />
  )
}