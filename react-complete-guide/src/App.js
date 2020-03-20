import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persona: [
      {name: 'Yusbel', age: 33 },
      {name: 'Yoda', age: 35 },
      {name: 'Dado', age: 1 }
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    this.setState({
      persona: [
        {name: 'Yusbel', age: 32 },
        {name: 'Yoda', age: 35 },
        {name: 'Pongo', age: 1/5 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persona: [
        {name: event.target.value, age: 32 },
        {name: 'Yoda', age: 35 },
        {name: 'Pongo', age: 1/5 }
      ]
    })
  }
 render(){  
  return (
    <div className="App">
     <h1>Hi, I am Yusbel 
       <button onClick={this.switchNameHandler}>Switch Name</button>
       </h1>
       <Person 
       name={this.state.persona[0].name} 
       age={this.state.persona[0].age}
       click={this.switchNameHandler}
       change={this.nameChangeHandler}
       />
       <Person 
       name={this.state.persona[1].name} 
       age={this.state.persona[1].age}
       />
       <Person 
       name={this.state.persona[2].name} 
       age={this.state.persona[2].age}
       />
    </div>
  );
 }
}

export default App;
