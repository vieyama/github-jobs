import React from "react";
import { Link, useHistory } from "react-router-dom";
import data from "../data/positions.json";
import moment from "moment";
import { find, some } from "lodash";
import { Form, Input, Button, Checkbox } from "antd";

const SearchPage = (props) => {
  const history = useHistory();
  const onFinish = (values) => {
    history.push({
      pathname: "/result",
      state: values,
    });
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
                <Checkbox>Full Time Only</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Form.Item>
            </Form>

            {data.map((job, i) => (
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
