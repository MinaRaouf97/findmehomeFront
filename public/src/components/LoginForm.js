import React, { Component } from 'react';
import { VERIFY_USER } from '../Events'

const cachedHits = localStorage.getItem('user-info');
const newcache = JSON.parse(cachedHits, null, -1);

export default class LoginForm extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nickname:newcache.user.name,
	  	error:""
	  };
	}

	setUser = ({user, isUser})=>{

		if(isUser){
			this.setError("User name taken")
		}else{
			this.setError("")
			this.props.setUser(user)
		}
	}

	handleSubmit = (e)=>{
		e.preventDefault()
		const { socket } = this.props
		const { nickname } = this.state
		socket.emit(VERIFY_USER, nickname, this.setUser)
	}

	// handleChange = (e)=>{
	// 	this.setState({nickname:e.target.value})
	// }

	setError = (error)=>{
		this.setState({error})
	}

	render() {	
		const { nickname, error } = this.state
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit} className="login-form" >

					<label htmlFor="nickname">
						<h2>Here You can ask about any thing?</h2>
					</label>
					{/* <input
						ref={(input)=>{ this.textInput = input }} 
						type="text"
						id="nickname"
						value={nickname}
						onChange={this.handleChange}
						placeholder={'MYCoolUSername'}
						/> */}
						<button type="submit">Continute </button>
						{/* <div className="error">{error ? error:null}</div> */}

				</form>
			</div>
		);
	}
}
