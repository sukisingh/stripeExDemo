import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './Header.css'

//import logo from '../images/logo1.png'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo1.png')} width="35"/></Link>
      <Link to="/products">Products</Link>
      <Link to="/developers">Developers</Link>
      <Link to="/company">Company</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/signin">Sign In</Link>
    </div>
   
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
