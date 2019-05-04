import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/* <Message /> */}
      <Counter></Counter>
      {/*<Greet name= "Name 2" superHero= "Super 2">
        <p> Name 2 paragraph</p>
      </Greet>*/}
      {/*<Welcome name= "Class Name 1" superHero= "Class Super Hero 1"></Welcome>*/}

     {/* <Greet name= "Name 1" superHero= "Super 1">
        <p>Helloo paragraph</p>
        <button className="btn">Action</button>
      </Greet>
      <Greet name= "Name 3" superHero= "Super 3"/>
      <Hello name= "Thamizh"> 
        <p> sample paragraph </p>
      </Hello>
      
      <Welcome name= "Class Name 2"></Welcome> */} 
    </div>
  );
}

export default App;
