import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h3>Hello from Gatsby</h3>
      <div className="container">
        <div className="row">
          <div className="col-6">Hello World</div>
          <div className="col-6">Hola</div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
