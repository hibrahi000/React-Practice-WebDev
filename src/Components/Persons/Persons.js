import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

        static getDerivedStateFromProps(props, state){
                console.log('[Persons.js] getderivedStateFromProps');
                return state
        }
        shouldComponentUpdate(nextProp, nextSate){
                console.log('[Persons.js] shouldComponentUpdate');
                return true;
        }

        getSnapshotBeforeUpdate(prevProps, prevState) {
                console.log('[Persons.js] getSnapshotBeforeUpdate');
        }

        componentDidUpdate() {
                console.log('[Persons.js] componentDidUpdate');
        }

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			let { name, age, id } = person;
			return (
				<Person
					click={() => this.deletePersonHandler(index)}
					key={id}
					name={name}
					age={age}
					changed={(event) => this.nameChangedHandler(event, id)}
				/>
			);
		});
	}
}

export default Persons;
