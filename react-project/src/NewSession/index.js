import React, { Component } from 'react'
import { Form, Button, Label, Modal } from 'semantic-ui-react'

export default class NewSession extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			date: '',
			time: '',
			location: '',
			comments: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createSession(this.state)
		//clear form
		this.setState({
			title: '',
			date: '',
			time: '',
			location: '',
			comments: ''
		})
	}
	

	render() {
		return(
			<Modal open={true} closeIcon={true} onClose={this.props.closeBookSessionModal}>
				<Modal.Content>
					<h4>Create a new session:</h4>
					<Form onSubmit={this.handleSubmit}>
						<Label>Title:</Label>
						<Form.Input
							type="text"
							name="title"
							value={this.state.title}
							placeholder="Title"
							onChange={this.handleChange}
						/>
						<Label>Date:</Label>
						<Form.Input
							type="date"
							name="date"
							value={this.state.date}
							placeholder="Date"
							onChange={this.handleChange}
						/>
						<Label>Time:</Label>
						<Form.Input
							type="text"
							name="time"
							value={this.state.time}
							onChange={this.handleChange}
						/>
						<Label>Session Location:</Label>
						<Form.Input
							type="text"
							name="location"
							value={this.state.location}
							placeholder="Enter session location"
							onChange={this.handleChange}
						/>
						<Label>Comments:</Label>
						<Form.Input
							type="text"
							name="comments"
							value={this.state.comments}
							placeholder="Enter comments"
							onChange={this.handleChange}
						/>
						<Button type="Submit">Add Session</Button>
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}