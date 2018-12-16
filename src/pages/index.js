import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div class="main">

        {/*stripes*/}
        <div id="stripes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/*Header title */}
        <div className="Hero">
          <div class="HeroGroup">
              <h1>Lorem ipsum dolor consectetur adipiscing elit</h1>
              <p>Maecenas venenatis volutpat nibh vitae blandit. Morbi at diam neque. Donec vel lorem est. Nunc sodales porta est, nec vulputate dui accumsan at. </p>
              <div className="heroButton">
                  <Link to="/page-2/"><button class="hero-create-btn">Create Account</button></Link>
                 <Link to="/page-2/"><button class="hero-contact-btn">Contact Sales</button></Link>
              </div>
          </div>
        </div>

        {/*App images*/}
        {/*     <section id="app-illustrations" class="hidden-preload">
               <div class="tablet-landscape">
                  <img alt="shopify" src="/img/v3/home/app-illustrations/shopify.svg">
               </div>
               <div class="phone-big">
                  <img alt="digitalocean" src="/img/v3/home/app-illustrations/digitalocean.svg">
               </div>
               <div class="phone-small">
                  <img alt="postmates" src="/img/v3/home/app-illustrations/postmates.svg">
               </div>
               <div class="tablet-portrait">
                  <img alt="asana" src="/img/v3/home/app-illustrations/asana.svg">
               </div>
            </section> */}
        <div id="app-images">
            <div class="tab-ls"></div>
            <div class="p-big"></div>
            <div class="p-small"></div>
            <div class="tab-p"></div>
        </div>
        
      
    </div>  {/*main class ends */}
  </Layout>
)

export default IndexPage
