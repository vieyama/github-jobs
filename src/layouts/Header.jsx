import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
function Header(props) {
  const history = useHistory();

  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="header-logo" onClick={() => history.push("/")}>
                <b>Github</b> Jobs
              </h1>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
