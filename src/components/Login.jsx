import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  const [name, setName] = useState("");
  const { from } = props.location.state || { from: { pathname: "/" } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
      localStorage.setItem("name", name);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row align-content-center">
          <div className="col-md-4 align-self-center">
            <h5 className="title mb-4">Login Now</h5>
            <input
              type="text"
              className="input-text"
              onChange={onChange}
              placeholder="Name"
            />
            <button className="btn-heading" onClick={login}>
              Search
            </button>
          </div>
          <div className="col-md-8 text-center">
            <img
              src="/images/auth.png"
              className="img-fluid"
              width="90%"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};
