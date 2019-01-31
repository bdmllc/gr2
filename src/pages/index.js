
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { HomeHeader, Banner, BannerButton} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HomeHeader img={img}>
        <Banner title="eatery" subtitle="101 Main St. Heartland, USA">
        <BannerButton style={{margin: '2rem auto'}}>menu</BannerButton>
        </Banner>
      </HomeHeader>
      <QuickInfo />
      <Gallery />
    </Layout>
)

export default IndexPage
