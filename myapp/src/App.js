import React, { Component } from 'react';
import UserImput from './component/UserInput/UserInput';
import UserOutput from './component/UserOutput/UserOutput';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    username: 'superyusbe'
  }

  usernameChangeHandler = (event) => {
      this.setState({username: event.target.value});
  }
   
  render(){
  return (
    <div className="App">
        <UserImput 
        changed={this.usernameChangeHandler}
        currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Yusbe" />
    </div>
  );
 }
}

export default App;
