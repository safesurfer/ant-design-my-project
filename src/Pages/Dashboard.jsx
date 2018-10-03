import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import Tables from "../components/Tables";
import Charts from "../components/Charts";
import "./Dashboard.css";
import PieCharts from "../components/PieCharts";
import MiniAreas from "../components/MiniAreas";
import data from '../assets/data'

const topColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 8,
  xl: 8
};

const natData = [
  {
    type: "EDM",
    value: 2401
  },
  {
    type: "EIM",
    value: 2305
  },
  {
    type: "EDM-R",
    value: 2617
  },
  {
    type: "EDM/EIM",
    value: 1290
  },
  {
    type: "EDM/EDM-R",
    value: 970
  },
  {
    type: "EIM/EDM-R",
    value: 540
  }
];

natData.sort((m, n) => m.value < n.value);

const protocolData = [
  {
    type: "TCP D",
    value: 440
  },
  {
    type: "TCP HP",
    value: 3593
  },
  {
    type: "uTP HP",
    value: 249
  }
];

protocolData.sort((m, n) => m.value < n.value);

const listCountry = data.globalNetworkActivity.map((coun, i) => (
  <li>
    {coun.x} {coun.y}
  </li>
));

class Dashboard extends Component {
  render() {
    return (
      <div className="gutter-example">
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              title="Global Network Activity"
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 500
              }}
            >
              <Charts
                values={listCountry}
                dataSource={data.globalNetworkActivity}
                interval={1000}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={8} {...topColResponsiveProps}>
            <Card
              title="NAT Type"
              style={{
                background: "#fff",
                minHeight: 350
              }}
            >
              <PieCharts data={natData} title="NAT Type" />
            </Card>
          </Col>
          <Col className="gutter-row" span={8} {...topColResponsiveProps}>
            <Card
              title="Protocol"
              style={{
                background: "#fff",
                minHeight: 350
              }}
            >
              <PieCharts data={protocolData} title="Protocol" />
            </Card>
          </Col>
          <Col className="gutter-row" span={8} {...topColResponsiveProps}>
            <Card
              title="Connection Attempts"
              style={{
                background: "#fff",
                minHeight: 350
              }}
            >
              <MiniAreas />
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

export default Dashboard;
