import React  from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450'
        }
    }
return (
    <div className="Person" style={style}>
    <p onClick={props.click }>I am {props.name} I am  {props.age} years old</p>
    <input type="text" onChange={props.change} value={props.name}/> 
    </div>
);

};

export default Radium(person);