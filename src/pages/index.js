import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div class="main">
        <div id="stripes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="Hero">
          <div class="HeroGroup">
              <h1>Lorem ipsum dolor consectetur adipiscing elit</h1>
              <p>Maecenas venenatis volutpat nibh vitae blandit. Morbi at diam neque. Donec vel lorem est. Nunc sodales porta est, nec vulputate dui accumsan at. </p>
              <Link to="/page-2/">Create Account</Link> 
             
          </div>
        </div>
      
    </div>
  </Layout>
)

export default IndexPage
