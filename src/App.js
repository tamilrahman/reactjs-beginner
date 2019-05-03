import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name= "Name 1" superHero= "Super 1">
      	<p>Helloo paragraph</p>
      	<button className="btn">Action</button>
      </Greet>
      <Greet name= "Name 2" superHero= "Super 2">
      	<p> Name 2 paragraph</p>
      </Greet>
      <Greet name= "Name 3" superHero= "Super 3"/>
    	{/* <Welcome /> */}
    	<Hello name= "Thamizh"> 
    		<p> sample paragraph </p>
    	</Hello>
    </div>
  );
}

export default App;
