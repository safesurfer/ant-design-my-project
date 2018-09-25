import React, { Component } from "react";
import { Layout, Menu, Icon, DatePicker } from "antd";
import moment from 'moment';
import Tables from "./Tables";
import "./Layouts.css";

const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;

const dateFormat = 'DD/MM/YYYY';

class Layouts extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            {/* <img src="safe-network-icon-white.png" alt="no pic"/> */}
            <h1>CRUST TESTNET</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <span id="item">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <span id="item">
                <Icon type="retweet" />
                <span>NAT Type</span>
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <span id="item">
                <Icon type="arrow-up" />
                <span>Protocol</span>
              </span>
            </Menu.Item>
            <Menu.Item key="4">
              <span id="item">
                <Icon type="warning" />
                <span>Failed Connections</span>
              </span>
            </Menu.Item>
            <Menu.Item key="5">
              <span id="item">
                <Icon type="clock-circle" />
                <span>History</span>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <span className="date">
              <RangePicker
                defaultValue={[
                  moment("2015/01/01", dateFormat),
                  moment("2015/01/01", dateFormat)
                ]}
                format={dateFormat}
              />
            </span>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <img src="safe-network-icon-white.png" alt="" />
            <Tables />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Layouts;
