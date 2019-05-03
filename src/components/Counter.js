import React, { Component } from 'react'

class Counter extends Component {
	constructor(props){
		super(props)

		this.state = {
			count: 0
		}
	}

	countIncrement(){
		// this.setState(
		// {
		// 	count: this.state.count + 1
		// },
		// () => {
		// 	console.log("Callback value", this.state.count)
		// }
		// )

		this.setState((prevState) => ({
			count: prevState.count + 1
		}))
		console.log(this.state.count)
	}

	incrementFive(){
		this.countIncrement()
		this.countIncrement()
		this.countIncrement()
		this.countIncrement()
		this.countIncrement()
	}

	render() {
		return (
			<div>
				<div>
					<h1>count - { this.state.count }</h1>
				</div>
				<button onClick={() => this.incrementFive()} > Increment </button>
			</div>
		)
	}
}

export default Counter