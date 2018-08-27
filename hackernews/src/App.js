import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var helloworld = "리엑트에 오신 여러분들 환영합니다";
    return (
      <div className = "App">
        <h2>{helloworld}</h2>
      </div>      
    );
  }
}

export default App;
