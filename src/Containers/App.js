import React, { Component, Fragment } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 'asfKK', name: 'Max', age: 28 },
			{ id: 'asfLL', name: 'Manu', age: 29 },
			{ id: 'asf::', name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false,
		showCockpit: true,
		changeCounter : 0
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});
		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState((prevState, props)=> {
			return{ 
			persons: persons, 
			changeCounter: this.state.changeCounter +1 
			}
		});
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice;
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		// const style = {
		// 	backgroundColor: 'green',
		// 	color: 'white',
		// 	font: 'inherit',
		// 	border: '1px solid blue',
		// 	padding: '8px',
		// 	cursor: ' pointer',
		// 	outline: 'none'
		// };
		console.log('[App.js] render ');

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler}
					/>
				</div>
			);
		}

		return (
			// you can only have one root element in the jsx structure

			<Fragment >
				<button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
				{this.state.showCockpit ? 
					<Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						personsLength={this.state.persons.length}
						clicked={this.togglePersonsHandler}
					/> : null
				}
				{persons}
			</Fragment>
		);
		// return React.createElement('h1', {className:'App'}, React.createElement('h1',null,'Does this work')); This is what it would look like if we didnt use Jsx
	}
}

export default withClass(App, classes.App);
