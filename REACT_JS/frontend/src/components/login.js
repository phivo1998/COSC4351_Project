import React from "react";

function Login() {
  // reset(e) {

  // } 

  return (
    <form>
      <div className="form-group row">
        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" placeholder="email@example.com" />
        </div>
      </div>
      <div className="form-group row">
        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
        </div>
      </div>
      <button className="btn btn-primary">Submit</button>
      <button className="btn btn-outline-success" style={{marginLeft: 5}}>Reset</button>
    </form>
  );
}

export default Login;
