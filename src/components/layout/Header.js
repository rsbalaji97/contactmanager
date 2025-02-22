import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const {title} = props;
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
		<div className="container">
			<a href="/" style={{color:'white', cursor:'pointer'}} className="navbar-title" >
			{title}
			</a>
			<div>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to="/" 
						className="nav-link">
						<i className="fas fa-home"></i>Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contacts/add" 
						className="nav-link">
						<i className="fas fa-plus"></i>Add
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" 
						className="nav-link">
						<i className="fas fa-question"></i>About
						</Link>
					</li>
				</ul>
			</div>
		</div>
		</nav>
	);
}
Header.defaultProps = {
	title : "my app"
}
Header.propTypes = {
	title : PropTypes.string.isRequired
}
export default Header;