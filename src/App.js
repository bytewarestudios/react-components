import React, { Component } from 'react';
import { Accordion } from './components/accordion/accordion';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    if (firebaseUserAccount.checkSignedIn()) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React Components</h2>
          </div>

          <h4> Accordion Component Demo </h4>
          <Accordion tabTitle="{accordion.titles}"></Accordion>
        </div>
      );
    } else {
      // user is not authenticate redirect to login page
      window.location.assign('/login');
    }
  }
}

export default App;
