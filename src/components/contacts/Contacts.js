import React from 'react';
import Contact from './Contact.js';

import {Consumer} from '../../context.js';
class Contacts extends React.Component {
	

	render() {
		return(
			<Consumer>
				{value =>{
					const {contacts} = value;
					return(
					<React.Fragment>
						<h1 className="display-4 mb-2">
						<span className="text-danger">Contact </span>List</h1>
						{contacts.map(contact =>(
						<Contact 
						key={contact.id}
						contact={contact}
						/>
						))}
					</React.Fragment>			
					)
				}}
			</Consumer>
			)
	}
}

export default Contacts;