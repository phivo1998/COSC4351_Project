import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MyComponent from './Components/body.js';
import View from './Components/View';
import Navbar from "./Components/navbar.js";

function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
      Hellow World
      
        <Route path='/' exact component={MyComponent}/>
        <Route path='/Admin' component={View}/>
      
      </Router>
    </div>
    
  );
}

export default App;
