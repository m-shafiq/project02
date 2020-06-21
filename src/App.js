import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Dinner from './dinner'

function App() {
  //return <h1> Hello World..by Shafiq</h1>
   //const name="Hello World. Shafiq"
   return (
     <div className="App"> 
        <h1>Hello World from shafiq</h1>
        <Dinner dishName="Chicken Karrahi" sweetName="Kheer"/>
     </div>
                 
   );
}

export default App;
