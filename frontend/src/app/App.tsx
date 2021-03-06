import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AboutPage from '../pages/about/AboutPage';
import HomePage from '../pages/home/HomePage';
import ContactPage from '../pages/contact/ContactPage';


function App() {
    return (
      <div className="App">
        <nav> 
          <ul>
            <li><Link to="/">Aceuil</Link></li>
            <li><Link to="/about">Qui sommes-nous</Link></li>
            <li><Link to="/contact">Nous contacter</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={AboutPage} />  
          <Route path="/contact" component={ContactPage} />  
          <Route path="/" component={HomePage} />  
        </Switch>        
      </div>
    );
  }
  
  export default App;