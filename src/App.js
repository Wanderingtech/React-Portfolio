import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Footer></Footer>
    </div>
  );
}

export default App;
