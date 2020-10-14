import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css"
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
   
      <Route exact path = "/" component= {AboutMe}></Route>
      <Route exact path = "/contact" component= {Contact}></Route>
      <Route exact path = "/portfolio" component= {Portfolio}></Route>
  
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
