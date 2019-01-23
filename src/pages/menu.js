// import { Link } from 'gatsby'
// import Image from '../components/image'
// import styled from 'styled-components'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { PageHeader } from '../utils'
import menuImg from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={menuImg}>  
        <h3>hello from menu</h3>
      </PageHeader>
    </Layout>
)

export default MenuPage
