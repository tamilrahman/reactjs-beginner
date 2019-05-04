import React from 'react'

function ChildComponent(props){
	return(
		<button onClick={() => props.greetHandler("child")}>Parant Click</button>
	)
}

export default ChildComponent