import React, {Component} from 'react';
import axios from 'axios';
const Context = React.createContext();

const reducer = (state,action) => {
	switch(action.type){
		case 'DELETE_CONTACT':
			return{
				...state,
				contacts : state.contacts.filter(
				 contact => contact.id !== action.payload)
			};
		case 'ADD_CONTACT':
			return{
				...state,
				contacts: [...state.contacts, action.payload]
			};
		default:
			return state;
	}
};

export class Provider extends Component{
	state = {
		contacts:[
			{
				id:1,
				name:'Balaji',
				email:'rsb.balaji97@gmail.com',
				number:'7667704534'
			},
			{
				id:2,
				name:'Arjun Kumar',
				email:'arjunkumarks1998@gmail.com',
				number:'8015495873'
			},
			{
				id:3,
				name:'Ashwin Kumar',
				email:'ashwinkumarkk@gmail.com',
				number:'8778311679'
			}
		],
		dispatch: action =>{
			this.setState(state => 
				reducer(state,action))
		}
	};

	render(){
		return(
			<Context.Provider value={this.state}>
			{this.props.children}
			</Context.Provider>
			)
	}
}

export const Consumer =	Context.Consumer;