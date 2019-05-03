import React from 'react'

// function Greet() {
//  return <h1> Stateless Fuctional Component</h1>
// }
const Greet = props => {
 return (
 	<div>
	 	<h1> hello <i>{props.name}</i> as <i> {props.superHero}</i></h1>
	 	{ props.children }
	</div>
 )
}

export default Greet