import './App.css';
import {  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
import Home from './pages/Home';
import phone from "./images/phone.png"
import email from './images/email.png'

function App() {
  return (
    <>
    
    <div className="navWrapper">
      <div className="topNav">
        <h4>Използвайте качествена тор!</h4>
        <div className="phoneWrapper">
          <img src={email} alt="email-icon" width="30" height="30"/>
          <h4>agrotorove77@abv.bg</h4>
          <img src={phone} alt="phone-icon" width="30" height="30"/>
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
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/torove">
          <h1>TOROVE</h1>
        </Route>
        <Route path="*">
          <div style={{height:'89.5vh', display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h1>Страницата не е намерена :(</h1>
          </div>
          
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
