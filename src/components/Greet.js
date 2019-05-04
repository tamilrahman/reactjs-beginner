import React from 'react'

// function Greet() {
//  return <h1> Stateless Fuctional Component</h1>
// }
const Greet = props => {
	const { name, superHero } = props
 return (
 	<div>
	 	<h1> hello <i>{name}</i> as <i> {superHero}</i></h1>
	</div>
 )
}

export default Greet