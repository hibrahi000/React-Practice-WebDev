import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


let counter =0;

class App extends Component {
  state ={
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}

    ],
    otherState : 'some other value'
  }
  
  switchNameHandler = ( newName ) =>{
    counter ++;
    console.log('Was Clicked');
    // this.state.persons[0].name = 'Maximilian'; DO NOT DO THIS
    this.setState( {
      persons: [
        {name : newName, age :counter},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

  render() {
    return (
      // you can only have one root element in the jsx structure
      <div className="App">
        <h1>Hello I Am React</h1>
        <p>This is another line</p>
        <button onClick={() => this.switchNameHandler('MAXIMUMM!!')}>Switch Name</button> {/* this method of passing values can be ineffciant */}        
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'MAX!')} >My Hobbies: Racing </Person> {/* USE THE BIND METHOD IT IS MORE EFFICIANT */}
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('h1', {className:'App'}, React.createElement('h1',null,'Does this work')); This is what it would look like if we didnt use Jsx

  }
}

export default App;
