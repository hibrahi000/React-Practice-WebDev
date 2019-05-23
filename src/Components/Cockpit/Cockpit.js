import React, { useEffect, memo } from 'react'
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    let {persons, title, clicked, personsLength} = props;
    // useEffect(() => {
    //     console.log(' [Cockpit.js] use effect');
    //    const timer =  setTimeout(() => {
    //         alert('Saved data to cloud!');
    //     } ,1000);
    //     return() => {
    //         clearTimeout(timer);
    //         console.log('[Cockpit.js] cleanuup work in  useEffect')
    //     }
    // }, []);
    
    // useEffect(() => {
    //     console.log(' 2nd [Cockpit.js] use effect');
    //     return() => {
    //         console.log('[Cockpit.js] cleanuup work in 2nd useEffect')
    //     }
    // })
    const assignedClasses = [];
    let btnClass ='';
    
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if (personsLength <= 2) {
        assignedClasses.push(classes.red); // classes =['red']
    }
    if (personsLength <= 1) {
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

export default  memo(Cockpit);