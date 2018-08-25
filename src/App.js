import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import HangmanContainer from './components/HangmanContainer'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact match path={"/"} component= {LandingPage}/>
        <Route path= "/hangman:id" component= {HangmanContainer} />
      </div>
    );
  }
}

export default App;
