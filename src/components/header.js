import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./navbar.css"

const Header = () => (
<div className="navWrapper">
      <div className="topNav">
        <h4>Използвайте качествена тор!</h4>
        <div className="phoneWrapper">
          <img alt="email-icon" width="30" height="30"/>
          <h4>agrotorove77@abv.bg</h4>
          <img alt="phone-icon" width="30" height="30"/>
          <h4>+ 359 887 697 749</h4>
        </div>
      </div>
      <div className="bottomNav">
        <div className="logoWrapper">
          <h1>АГРО ТОРОВЕ 77</h1>
        </div>
        <div className="navigation">
          <div className="navItem">
            <a href="/">Начало</a>
          </div>
          <div className="navItem">
            <a href="/torove">Торове</a>
          </div>          
          <div className="navItem">
            <a href="/about">За Нас</a>
          </div>
          <div className="navItem">
            <a href="/contact-us">Контакти</a>
          </div>          
        </div>
      </div>
    </div>
)
export default Header
