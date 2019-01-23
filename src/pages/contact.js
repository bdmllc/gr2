// import { Link } from 'gatsby'
// import Image from '../components/image'
// import styled from 'styled-components'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { PageHeader } from '../utils'
import contactImg from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <h3>Contact Page</h3>
    </PageHeader>
      
    </Layout>
)

export default ContactPage
