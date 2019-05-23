import React, { Component,Fragment } from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
class Person extends Component {
	render() {
		let { name, age, children, click, changed } = this.props;
		console.log('[Person.js] rendering...');
		return (
			<Fragment>
				<p key='i1' onClick={click}>
				I'm {name} and I am {age} years old!{' '}
				</p>
				<p key='i2' >{children}</p>
				<input
					key = 'i3'
					type="text"
					onChange={changed}
					value={name} />
			</Fragment>	
		);
	}
};

export default withClass(Person, classes.Person);
