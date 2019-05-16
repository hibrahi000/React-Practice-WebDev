import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
	render() {	
		let { name, age, children, click, changed } = this.props;
		console.log('[Person.js] rendering...');
		return (
			<div className={classes.Person}>
				<p onClick={click}>
					I'm a {name} and I am {age} years old!{' '}
				</p>
				<p>{children}</p>
				<input type="text" onChange={changed} value={name} />
			</div>
		);
	}
};

export default Person;
