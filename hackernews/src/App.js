import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloworld = "리엑트에 오신 여러분들 환영합니다";
    const user = {
      firstName: 'sh',
      lastName: 'Yang'
    };

    return (
      <div className = "App">
        <h2>{user.firstName}{user.lastName}님, {helloworld}</h2>
      </div>      
    );
  }
}

export default App;
