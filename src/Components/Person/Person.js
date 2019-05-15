import React from 'react';
import './Person.css';

const person = ( props ) =>{


    let { name, age, children, click, changed } = props;
    return (
    <div className = 'Person'>
    <p   onClick   = {click}>I'm a {name} and I am {age} years old! </p>
        <p>{children}</p>
        <input type = 'text' onChange = {changed} value = {name} />
    </div>
    )
};


export default person;


