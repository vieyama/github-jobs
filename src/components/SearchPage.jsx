import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import data from "../data/positions.json";
import moment from "moment";
import { filter } from "lodash";
import { Form, Input, Button, Checkbox } from "antd";

const SearchPage = (props) => {
  const [dataJobs, setDataJobs] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDataJobs(data);
  }, []);

  const onFinish = (values) => {
    const resultdata = dataJobs.filter((res) => {
      return (
        res.title.indexOf(values.jobTitle) > -1 ||
        res.location.indexOf(values.jobLocation) > -1
      );
    });
    setDataJobs(resultdata);
    setDisplay(true);
  };

  const fullTimeOnly = (e) => {
    if (e.target.checked === true) {
      const resultData = filter(dataJobs, { type: "Full Time" });
      setDataJobs(resultData);
    } else {
      setDataJobs(data);
    }
  };

  const onClear = () => {
    setDataJobs(data);
    setDisplay(false);
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
                rules={[
                  { required: false, message: "Please fill this field!" },
                ]}
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
                onClick={onClear}
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
                <h2>Showing {dataJobs.length} Jobs</h2>
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
