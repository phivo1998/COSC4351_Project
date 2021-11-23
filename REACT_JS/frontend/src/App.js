import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";

function App() {
  const [user,setUser] = React.useState(null)
  const [admin,setAdmin] = React.useState(null)
  
  async function login(user =null){
    setUser(user);
  }

  async function logout(){
    setUser(user=null);
  }


  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        
      <Route path='/login' 
      render ={(props)=>(
        <Login {...props} user={login}/>
      )} />        
      <Route path='/sign-up' component={SignUp} />
      <Route path='/dashboard/:username' component={Dashboard} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
