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
      ],
      otherState: 'some other value',
      showPerson: false
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

  togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
  }

 render(){
   const style ={
     background: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer'
   }

   let person = null;
   if (this.state.showPerson){
     person = (
      <div>
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
  return (
    <div className="App">
      <h1>Hi I' m a react App </h1>
      <p>this really working!</p>
      <button 
         style={style}
         onClick={this.togglePersonHandler}>Toggle Person</button>
         {person}      

    </div>
  );
 }
}

export default App;
