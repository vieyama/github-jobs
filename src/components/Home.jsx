import React from "react";

function Home(props) {
  const history = props.history;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row align-content-center">
          <div className="col-md-4 align-self-center">
            <h5 className="title">Find your dream job now</h5>
            <button
              className="btn-heading"
              onClick={() => history.push("/search")}
            >
              Search
            </button>
          </div>
          <div className="col-md-8 text-center">
            <img
              src="/images/jobs.jpg"
              className="img-fluid image-jobs"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
