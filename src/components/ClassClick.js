import React, { Component } from 'react'

class ClassClick extends Component {

	clickHander(){
		console.log("Class button clicked")
	}
	render(){
		return(
			<div>
				<button onClick={this.clickHander}>ClassClick</button>
			</div>
		)
	}
}

export default ClassClick