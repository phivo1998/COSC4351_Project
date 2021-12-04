import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";
import Confirmation from "./components/pages/confirmation";
import ThankYou from "./components/pages/thankyou";
import UserReservation from "./components/pages/userReservation";
import GuestReservation from "./components/pages/guestReservation";

function App() {
  let [user, setUser] = React.useState(null)
  let [userId, setUserId] = React.useState(null)
  const [admin, setAdmin] = React.useState(null)

  async function login(user = null, id = null) {
    console.log(`user set to ${user}`)

    setUser(user);
    setUserId(id)

  }

  async function logout() {
    setUser(user = null);
  }


  return (
    <>
      <Router>

        <Switch>

          <Route path='/dashboard/:username'
            render={(props) => (
              <Dashboard {...props} user={user} username={userId} />
            )} />
          <Route path="/userReservation/:username" 
            render={(props) => (
              <UserReservation {...props} user={user}/>
            )} />
          <Route path='/confirmation/:username' 
          render={(props) => (
            <Confirmation {...props} user={user}/>
          )} />
          <Route path='/thankyou/:username' component={ThankYou} />

          <div>
            <Navbar />
            <Route path='/login'
              render={(props) => (
                <Login {...props} login={login} />
              )} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/confirmation' component={Confirmation} />
            <Route path='/thankyou' component={ThankYou} />
            <Route exact path="/reservations" component={GuestReservation} />
          </div>


        </Switch>
      </Router>
    </>
  );
}

export default App;
