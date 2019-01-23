// import { Link } from 'gatsby'
// import Image from '../components/image'
// import styled from 'styled-components'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { PageHeader } from '../utils'
import aboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={aboutImg}>
        hello from about page
      </PageHeader>
    </Layout>
)

export default AboutPage
