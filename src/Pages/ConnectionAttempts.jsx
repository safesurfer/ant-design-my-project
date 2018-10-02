import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import Tables from "../components/Tables";
import Charts from "../components/Charts";
import TabComp from "../components/TabComp";
import "./Dashboard.css";
import ButtonGroup from "../components/ButtonGroup";

class ConnectionAttempts extends Component {
  render() {
    return (
      <div className="gutter-example">
        <span>
          <h1 style={{ padding: "10px 0px 0px 30px", display: "inline" }}>Connection Attempts </h1>
          <span style={{ float: "right", padding: "10px 20px 0px 0px"}}>
            Connection result: <ButtonGroup />
          </span>
        </span>

        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 100
              }}
            >
              <TabComp />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 500
              }}
            >
              <Charts />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                minHeight: 280
              }}
            >
              <Tables />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ConnectionAttempts;
