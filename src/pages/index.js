import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div>
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>Maecenas venenatis volutpat nibh vitae blandit. Morbi at diam neque. Donec vel lorem est. Nunc sodales porta est, nec vulputate dui accumsan at. </p>
    <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
