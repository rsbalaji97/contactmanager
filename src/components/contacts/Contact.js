import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
class Contact extends Component {
	state={
		showContactInfo : false
	};
	showOnClick = () =>{
	 	this.setState({showContactInfo : !this.state.showContactInfo})
	}
	onDeleteClick =async (id,dispatch) => {
		try
		{
			axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		dispatch({type :'DELETE_CONTACT', payload:id});
		}
		catch(e) {
			dispatch({type :'DELETE_CONTACT', payload:id});
		}
	}
	render() {
		const {showContactInfo} = this.state;
		const {id, name, email,phone} = this.props.contact;

		return (
			<Consumer>
			{value => {
				const {dispatch}=value;
				return(
				<div className="card card-body mb-3">
				<h4>
				{name}<i onClick={this.showOnClick} className="fas fa-sort-down"  
				style={{cursor:'pointer'}}/>
				<i className="fas fa-times" style={{cursor:'pointer', float:'right',
				 color:'red'}} onClick={this.onDeleteClick.bind(this,id,dispatch)} 
				 />
				<Link to={`contacts/edit/${id}`}>
					<i className="fas fa-pencil-alt"
						style={{cursor:'pointer',
						float:'right',
						color:'black',
						marginRight:'1rem'
						}}
					/>
				</Link>
				</h4>
				{showContactInfo ? (<ul className="list-group">
					<li className="list-group-item">e-mail : {email}</li>
					<li className="list-group-item">phone : {phone} </li>
				</ul>) : null}
				
			</div>
				)	
			}}
			</Consumer>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
}
export default Contact;