import React, { Component } from "react";
import { Tabs, Row, Col, Dropdown, Button, Icon, Menu, Card } from "antd";

import Charts from "./Charts";
import data from "../assets/data";

const TabPane = Tabs.TabPane;

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

const osArr = [];
data.logs.forEach((log) => {
  osArr.push(log.peer_requester.os, log.peer_responder.os);
});

let osNames = new Set(osArr);
const osName = Array.from(osNames);
console.log('osName', osName)

const osCount = osName.map(osN => (osArr.filter(os => os===osN).length));

console.log('osCount', osCount)

let osList = []
osName.forEach((os, i) => {
  let osObj = {};
  osObj["x"]=os;
  osObj["y"]=osCount[i];
  osList.push(osObj);
}
);

console.log('osList', osList);


console.log('osArr', osArr)

const listCountry = data.globalNetworkActivity.map((coun, i) => (
  <li>
    {coun.x} {coun.y}
  </li>
));

const listOS = osName.map((os, i) => (
  <li>
    {os}
  </li>
))

function callback(key) {
  console.log(key);
}

class TabComp extends Component {
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          size="large"
          animated={false}
        >
          <TabPane tab="All Activity" key="1">
            <Row gutter={24} style={{ margin: "24px 8px" }}>
              <Col className="gutter-row" span={8}>
                <Col span={4}>NAT Type</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
              <Col className="gutter-row" span={8}>
                <Col span={4}>O.S.</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
            </Row>
            <Row gutter={24} style={{ margin: "24px 8px" }}>
              <Col className="gutter-row" span={8}>
                <Col span={4}>Protocol</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
              <Col className="gutter-row" span={8}>
                <Col span={4}>Country</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Country" key="2">
            <Row gutter={24} style={{ margin: "24px 8px" }}>
              <Col className="gutter-row" span={8}>
                <Col span={4}>NAT Type</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
              <Col className="gutter-row" span={8}>
                <Col span={4}>Protocol</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
              <Col className="gutter-row" span={8}>
                <Col span={4}>O.S.</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
            </Row>
            <Card>
              <Row>
                <Col>
                  <Charts
                    values={listCountry}
                    dataSource={data.globalNetworkActivity}
                    interval={1000}
                  />
                </Col>
              </Row>
            </Card>
          </TabPane>
          <TabPane tab="Operating System" key="3">
            <Row gutter={24} style={{ margin: "24px 8px" }}>
              <Col className="gutter-row" span={8}>
                <Col span={4}>NAT Type</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
              <Col className="gutter-row" span={8}>
                <Col span={4}>Protocol</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
              <Col className="gutter-row" span={8}>
                <Col span={4}>O.S.</Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
            </Row>
            <Card>
              <Row>
                <Col>
                  <Charts
                    values={listOS}
                    dataSource={osList}
                    interval={10}
                  />
                </Col>
              </Row>
            </Card>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabComp;
