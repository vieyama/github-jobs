import React from "react";
import data from "../data/positions.json";
import parse from "html-react-parser";
import { find } from "lodash";
import { ArrowLeftOutlined } from "@ant-design/icons";

const SearchPage = (props) => {
  const jobId = props.match.params.id;

  const dataSingle = find(data, { id: jobId });
  const addDefaultSrc = (e) => {
    e.target.src =
      "https://www.digopaul.com/wp-content/uploads/related_images/2015/09/08/placeholder_2.jpg";
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex">
              <ArrowLeftOutlined onClick={() => props.history.goBack()} />
              <h5>Job Detail</h5>
            </div>
            <div className="card mt-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <h2 className="title-detail">{dataSingle.title}</h2>
                    <p className="text-muted">
                      {dataSingle.type} / {dataSingle.location}
                    </p>
                    <h4>
                      {" "}
                      <a
                        href={dataSingle.company_url}
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {parse(dataSingle.company)}
                      </a>{" "}
                    </h4>

                    <p>{parse(dataSingle.description)}</p>
                  </div>
                  <div className="col-md-4">
                    <img
                      onError={addDefaultSrc}
                      src={dataSingle.company_logo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchPage;
