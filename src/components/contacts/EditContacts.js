import React from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
class EditContacts extends React.Component {
	state = {
		name:'',
		email:'',
		phone:'',
		errors:{}
    }
    
    async componentDidMount (){
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        });
    }

	onSubmit = async(dispatch,e) => {
		e.preventDefault();
		
		const {name, email, phone} = this.state;

		
		if(name === '') {
			this.setState({errors: {name: 'Name is required'}});
			return;
		}
		if(email === '') {
			this.setState({errors: {email: 'E-mail is required'}});
			return;
		}
		if(phone === '') {
			this.setState({errors: {phone: 'phone is required'}});
			return;
		}
		
		const { id } = this.props.match.params;

		const updContact = {
			name,
			email,
			phone
		};
		const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);

		dispatch({ type : 'UPDATE_CONTACT', 
					payload : res.data});

		//resetting all the text boxes
		this.setState({
			name:'',
			email:'',
			phone:'',
			errors:{}
		})		
		//pushing to the homepage
		this.props.history.push("/");
	}
	onChange = (e) => this.setState({[e.target.name] : e.target.value}
		)
	render() {
		const {name, email, phone, errors} = this.state;
		return(
			<Consumer>
				{value =>{
					const { dispatch } =value;
					return(
						<div className="card mb-3">
				<div className="card-header">
					Edit Contact
				</div>
				<div className="card-body">
					<form onSubmit ={this.onSubmit.bind(this,dispatch)}>
						<TextInputGroup 
							label= "Name"
							name ="name"
							placeholder="Enter Name..."
							value={name}
							onChange={this.onChange}
							error={errors.name}
						/>
						<TextInputGroup 
							label= "E-mail"
							name ="email"
							type='email'
							placeholder="Enter E-mail..."
							value={email}
							onChange={this.onChange}
							error={errors.email}
						/>
						<TextInputGroup 
							label= "phone"
							name ="phone"
							placeholder="Enter phone..."
							value={phone}
							onChange={this.onChange}
							error={errors.phone}
						/>
						<input type="submit" value="Update Contact" 
							className="btn btn-light btn-block" />
					</form>
				</div>
			</div>
						)
				}
				}
			</Consumer>
			)
	}
}
export default EditContacts