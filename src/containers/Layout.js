import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["5"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1" onClick={this.props.logout}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.props.logout}>
              <Link to="/">Courses</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.logout}>
              <Link to="/">Blog</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.logout}>
              <Link to="/">FAQ</Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={this.props.logout}>
              <Link to="/">Contact Us</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.logout}>
              <Link to="/">Contribute</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.props.logout}>
              <Link to="/">Gallery</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.logout}>
              <Link to="/">Community</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.logout}>
              <Link to="/">Teachers</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.logout}>
              <Link to="/">Contests</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.logout}>
              <Link to="/">Careers</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.props.logout}>
              <Link to="/">Policies</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.props.logout}>
              <Link to="/">Help</Link>
            </Menu.Item>



            {this.props.isAuthenticated ? (
              <Menu.Menu position="right" >
                <Menu.Item key="5" onClick={this.props.logout}>
                  Logout
                </Menu.Item>
              </Menu.Menu>

            ) : (
              <Menu.Item key="5">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {this.props.token !== null ? (
              <Breadcrumb.Item>
                <Link to={`/profile/${this.props.userId}`}>Profile</Link>
              </Breadcrumb.Item>
            ) : null}
            {this.props.token !== null && this.props.is_teacher ? (
              <Breadcrumb.Item>
                <Link to="/create">Create</Link>
              </Breadcrumb.Item>
            ) : null}
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token,
    is_teacher: state.auth.is_teacher
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
