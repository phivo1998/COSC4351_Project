import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login";
import Restaurants from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant page
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            {user ? (
              <a onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Router>
          <Switch>
            <Route exact path={["/", "/restaurants"]} component={Restaurants} />
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} login={login} />
              )}
            />
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
