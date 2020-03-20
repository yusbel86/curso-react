import React, { Component } from 'react';
import UserImput from './component/UserInput';
import UserOutput from './component/UserOutput';
import logo from './logo.svg';
import './App.css';

function App() {

  state = {
    username: 'superyusbe'
  }
  return (
    <div className="App">
        <UserImput />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Yusbe" />
        <UserOutput userName="Yusbe" />
    </div>
  );
}

export default App;
