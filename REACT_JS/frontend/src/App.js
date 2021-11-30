import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";
import Confirmation from "./components/pages/confirmation";
import ThankYou from "./components/pages/thankyou";

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
          <div>
            <Navbar />
            <Route path='/login'
              render={(props) => (
                <Login {...props} login={login} />
              )} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/confirmation' component={Confirmation} />
            <Route path='/thankyou' component={ThankYou} />
          </div>

        </Switch>
      </Router>
    </>
  );
}

export default App;
