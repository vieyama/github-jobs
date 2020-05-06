import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import data from "../data/positions.json";
import moment from "moment";
import { find, filter } from "lodash";
import { Form, Input, Button, Checkbox } from "antd";

const SearchPage = (props) => {
  const history = useHistory();
  const [dataJobs, setDataJobs] = useState([]);
  const [display, setDisplay] = useState(false);

  const getData = () => {
    setDataJobs(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onFinish = (values) => {
    setDisplay(true);
    const resultData = filter(dataJobs, { title: values.jobTitle });
    console.log(resultData);
  };

  const fullTimeOnly = (e) => {
    if (e.target.checked === true) {
      const resultData = filter(dataJobs, { type: "Full Time" });
      setDataJobs(resultData);
    } else {
      setDataJobs(data);
    }
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h5>Job List</h5>

            <Form
              name="customized_form_controls"
              layout="inline"
              onFinish={onFinish}
            >
              <Form.Item
                name="jobTitle"
                rules={[{ required: true, message: "Please fill this field!" }]}
                label="Job Description"
              >
                <Input style={{ width: "250px" }} />
              </Form.Item>
              <Form.Item
                name="jobLocation"
                rules={[{ required: true, message: "Please fill this field!" }]}
                label="Location"
              >
                <Input style={{ width: "250px" }} />
              </Form.Item>
              <Form.Item name="fullTime" valuePropName="checked">
                <Checkbox onChange={fullTimeOnly}>Full Time Only</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ display: display ? "" : "none" }}
              >
                Clear
              </Button>
            </Form>

            <div
              className="row mt-5"
              style={{ display: display ? "" : "none" }}
            >
              <div className="col-md-12">
                <h2>Showing 3 Jobs</h2>
              </div>
            </div>

            {dataJobs.map((job, i) => (
              <div className="card my-2" key={i}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8 col-sm-12">
                      <Link className="title" to={`/job/${job.id}`}>
                        <span>{job.title}</span>
                      </Link>{" "}
                      <br />
                      <span className="company">{job.company}</span>
                      {" - "}
                      <span className="type">{job.type}</span>
                    </div>
                    <div className="col-md-4 col-sm-12 text-right">
                      <span className="localtion">{job.location}</span> <br />
                      <span className="text-muted">
                        {moment(job.created_at).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchPage;
