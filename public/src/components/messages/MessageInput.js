import React, { Component, useState, useEffect, useContext } from 'react';

import axios from 'axios';




export default class MessageInput extends Component {



	constructor(props) {
		super(props);

		this.state = {
			message: "",
			isTyping: false
		};

	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.sendMessage()
		this.setState({ message: "" })

	}

	
	sendMessage = () => {
		this.props.sendMessage(this.state.message)
		console.log(this.state.message)
		const cachedHits = localStorage.getItem('user-info');
		const newcache = JSON.parse(cachedHits, null, -1);
		const jwtoken = newcache.jwt;
		const headers = {
		Authorization: `Bearer ${jwtoken}`,
			'Accept' : 'application/json',
			'Content-Type': 'application/json'
		  }
		  const data = {
			"messege":this.state.message,
			"id":3
			}
		console.log(jwtoken)
		axios
        .post(
          `http://localhost:8000/api/chat/`,data,
          {headers: headers}
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));


	}

	componentWillUnmount() {
		this.stopCheckingTyping()
	}

	sendTyping = () => {
		this.lastUpdateTime = Date.now()
		if (!this.state.isTyping) {
			this.setState({ isTyping: true })
			this.props.sendTyping(true)
			this.startCheckingTyping()
		}
	}




	/*
	*	startCheckingTyping
	*	Start an interval that checks if the user is typing.
	*/
	startCheckingTyping = () => {
		console.log("Typing");
		this.typingInterval = setInterval(() => {
			if ((Date.now() - this.lastUpdateTime) > 300) {
				this.setState({ isTyping: false })
				this.stopCheckingTyping()
			}
		}, 300)
	}

	/*
	*	stopCheckingTyping
	*	Start the interval from checking if the user is typing.
	*/
	stopCheckingTyping = () => {
		console.log("Stop Typing");
		if (this.typingInterval) {
			clearInterval(this.typingInterval)
			this.props.sendTyping(false)
		}
	}


	render() {
		const { message } = this.state
		return (
			<div className="message-input">
				<form
					onSubmit={this.handleSubmit}
					className="message-form">

					<input
						id="message"
						ref={"messageinput"}
						type="text"
						className="form-control inputsChat"
						value={message}
						autoComplete={'off'}
						placeholder="Type something interesting"
						onKeyUp={e => { e.keyCode !== 13 && this.sendTyping() }}
						onChange={
							({ target }) => {
								this.setState({ message: target.value })
							}
						}
					/>
					<button
						disabled={message.length < 1}
						type="submit"
						className="send"

					> Send </button>
				</form>

			</div>
		);
	}
}
