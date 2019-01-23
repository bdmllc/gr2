import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import {HomeHeader} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
// import { Link } from 'gatsby'
// import Image from '../components/image'
// import styled from 'styled-components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HomeHeader img={img}>
        Hola, soy el Home Header
      </HomeHeader>
    </Layout>
)

export default IndexPage
