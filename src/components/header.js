import * as React from "react"
import { Link } from "gatsby"
import "./navbar.css"

function Header () {
  // const[visible, setVisible] = React.useState(true)
  
  function myFunction () {
    var x = document.getElementById("links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else if(x.style.display = "none"){
      x.style.display = "flex";
    }
  } 
  return(
<div className="navWrapper">
      <div className="topNav">
        <h4>Използвайте качествена тор!</h4>
        <div className="phoneWrapper">
          <img src="/images/email.png" alt="email-icon" />
          <a href="mailto:agrotorove77@abv.bg">agrotorove@abv.bg</a>
          <img src="/images/phone.png" alt="phone-icon" />
          <a href="tel:359 887 697 749">+ 359 887 697 749</a>
        </div>
      </div>
      <div className="bottomNav">
        <div className="logoWrapper">
          <h1 style={{cursor:"pointer"}} onClick={() => window.location.href="/"}>АГРО ТОРОВЕ 77</h1>
          <img src="/images/menu.svg" width="50" onClick={myFunction} alt="bar"/>
        </div>
        <div className="navigation" id="links">
          <div className="navItem" >
            <Link to="/">Начало</Link>
          </div>
          <div className="navItem" >
            <Link to="/torove" >Торове</Link>
          </div>          
          <div className="navItem" >
            <Link to="/uan">УАН</Link>
          </div>     
          <div className="navItem" >
            <Link to="/listni-torove">Листни торове</Link>
          </div>     
          <div className="navItem">
            <Link to="/contact-us">Контакти</Link>
          </div>      
        </div> 

      </div>
    </div>)
}
export default Header
