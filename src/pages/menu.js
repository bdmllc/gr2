// import { Link } from 'gatsby'
// import Image from '../components/image'
// import styled from 'styled-components'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { PageHeader, Banner } from '../utils'
import menuImg from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={menuImg}>  
        <Banner title="menu" subtitle={`lets dig in `} />
      </PageHeader>
    </Layout>
)

export default MenuPage
