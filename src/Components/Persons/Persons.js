import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	// static getDerivedStateFromPrrops(props, state){
	// 	console.log('[Persons.js] getderivedStatFromProps');
	// 	return state;
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		if(nextProps.persons !== this.props.persons){
		return true;
		}
		else{
			return false;
		}
	}

	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return {message : 'Snapshot!'};
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}
	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			let { name, age, id } = person;
			return (
				<Person
					click={() => this.props.clicked(index)}
					key={id}
					name={name}
					age={age}
					changed={(event) => this.props.changed(event, id)}
				/>
			);
		});
	}
}

export default Persons;
