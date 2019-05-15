import React, { Component } from 'react';
import classes from './App.css';
import Person from './Components/Person/Person'



let counter = 0;

class App extends Component {
  state ={
    persons: [
      {id: 'asfKK', name: 'Max', age: 28},
      {id: 'asfLL', name: 'Manu', age: 29},
      {id: 'asf::', name: 'Stephanie', age: 26}

    ],
    otherState: 'some other value'
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const   persons      = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({ persons : persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {


    const style ={
      backgroundColor: "green",
      color          : "white",
      font           : "inherit",
      border         : "1px solid blue",
      padding        : '8px',
      cursor         : ' pointer',
      outline        : 'none',

    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            let { name, age, id} = person

            return <Person
              click   = {() => this.deletePersonHandler(index)}
              name    = {name}
              age     = {age}
              key     = {id}
              changed = {(event) =>this.nameChangedHandler(event, id)}
              />

            })}

        </div>


      );
        style.backgroundColor = 'red';

    }
    console.log(classes);

    const assignedClasses = []
    if(this.state.persons.length <= 2){
      assignedClasses.push( classes.red ); // classes =['red']
    
    }
    if(this.state.persons.length <=1){
      assignedClasses.push( classes.bold ); // classes =['red', 'bold']
    }
    return (
      // you can only have one root element in the jsx structure

      <div className = {classes.App}>
        <h1>Hello I Am React</h1>
        <p      className = {assignedClasses.join(' ')}>This is another line</p>
        <button style     = {style} onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>


    );
    // return React.createElement('h1', {className:'App'}, React.createElement('h1',null,'Does this work')); This is what it would look like if we didnt use Jsx

  }
}

export default App;
