import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { HomeHeader, Banner} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HomeHeader img={img}>
        <Banner title="eatery" subtitle="101 Main St. Heartland, USA" />
      </HomeHeader>
    </Layout>
)

export default IndexPage
