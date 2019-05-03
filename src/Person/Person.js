import React from 'react';

const person = ( props ) =>{
    let { name, age, children, click } = props;
    return (
    <div>
        <p onClick={click}>I'm a {name} and I am {age} years old! </p>
        <p>{children}</p>
    </div>
    )
};


export default person;


