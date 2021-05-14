import * as React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Header = () => (
<div className="navWrapper">
      <div className="topNav">
        <h4>Използвайте качествена тор!</h4>
        <div className="phoneWrapper">
          <img src="/images/email.png" alt="email-icon" width="30" height="30"/>
          <a href="mailto:agrotorove77@abv.bg">agrotorove77@abv.bg</a>
          <img src="/images/phone.png" alt="phone-icon" width="25" height="30"/>
          <a href="tel:359 887 697 749">+ 359 887 697 749</a>
        </div>
      </div>
      <div className="bottomNav">
        <div className="logoWrapper">
          <h1>АГРО ТОРОВЕ 77</h1>
        </div>
        <div className="navigation">
          <div className="navItem">
            <Link to="/">Начало</Link>
          </div>
          <div className="navItem">
            <Link to="/torove">Торове</Link>
          </div>          
          <div className="navItem">
            <Link to="/about">За Нас</Link>
          </div>
          <div className="navItem">
            <Link to="/contact-us">Контакти</Link>
          </div>          
        </div>
      </div>
    </div>
)
export default Header
