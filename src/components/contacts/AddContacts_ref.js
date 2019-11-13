import React from 'react'

class AddContacts extends React.Component {
	constructor (props){
		super(props);

		this.nameInput=React.createRef();
		this.emailInput=React.createRef();
		this.numberInput=React.createRef();
	}
	onSubmit = (e) => {
		e.preventDefault();
		const contact ={
			name : this.nameInput.current.value,
			email : this.emailInput.current.value,
			number : this.numberInput.current.value
		}
		console.log(contact);
	}
	static defaultProps = {
		name : 'Balaji',
		email :'rsb.balaji97@gmail.com',
		number:'7667704534'
	}
	render() {
		const {name, email, number} = this.props;
		return (
			<div className="card mb-3">
				<div className="card-header">
					Add Contact
				</div>
				<div className="card-body">
					<form onSubmit ={this.onSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text"
								name="name"
								className="form-control form-control-lg"
								placeholder="Enter Name..."
								defaultValue={name}
								ref = {this.nameInput}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">E-mail</label>
							<input type="email"
								name="email"
								className="form-control form-control-lg"
								placeholder="Enter Email..."
								defaultValue={email}
								ref = {this.emailInput}
							/>
						</div>
						<div className="form-group">
						<label htmlFor="number">Number</label>
							<input type="text"
								name="number"
								className="form-control form-control-lg"
								placeholder="Enter Number..."
								defaultValue={number}
								ref = {this.numberInput}
							/>
						</div>
						<input type="submit" value="Add Conract" 
							className="btn btn-light btn-block" />
					</form>
				</div>
			</div>
		)
	}
}
export default AddContacts