import React, { Component } from 'react';
import './App.css';
import enterBtn from './images/enterBtn.png'
import startBg from './images/startBg.png'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={startBg} className="App-logo" alt="logo" />
            <img src={enterBtn} className="App-logo" alt="logo" />



        </header>
      </div>
    );
  }
}

export default App;
