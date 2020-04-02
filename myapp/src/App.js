import React, { Component } from 'react';
import UserImput from './component/UserInput/UserInput';
import UserOutput from './component/UserOutput/UserOutput';
import Validation from './component/Validation/Validation';
import Char from './component/Char/Char';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    username: 'superyusbe',
    userInput: ''
  }

  usernameChangeHandler = (event) => {
      this.setState({username: event.target.value});
  }

  inputChangendHandler = (event) => {
      this.setState({userInput: event.target.value});
  }
   
  render(){

    const charList = this.state.userInput.split('').map(ch => {
      return <Char character={ch} />
    })
  return ( 
    <div className="App">
        <UserImput 
        changed={this.usernameChangeHandler}
        currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Yusbe" />

        <hr />
        <input 
        type="text" 
        onChange={this.inputChangendHandler}
        value={this.state.userInput}
        />
        <p>{this.state.userInput }</p>
        <Validation 
        inputLenght={this.state.userInput.length}
        />
        {charList}
    </div>
  );
 }
}

export default App;
