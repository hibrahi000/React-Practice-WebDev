import React from 'react'
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    let {persons, title,clicked} = props;
    const assignedClasses = [];
    let btnClass ='';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (persons.length <= 2) {
        assignedClasses.push(classes.red); // classes =['red']
    }
    if (persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes =['red', 'bold']
    }
    return (
        <div className = {classes.Cockpit}>
            <h1>{title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default  cockpit;