import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUser: "",
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
  };

  render() {
    if (this.props.users) {
      const userIds = Object.keys(this.props.users);
      return (
        <div>
          <h3>Login</h3>
          <h5>Select user from below:</h5>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                minWidth: 200,
                width: "100%",
                margin: "4px 0px",
                boxSizing: "border-box",
              }}
            >
              {this.state.selectedUser}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {userIds.map((userId) => (
                <Dropdown.Item
                  key={userId}
                  onClick={() => this.setState({ selectedUser: userId })}
                >
                  {userId}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            onClick={this.handleLogin}
            disabled={!this.state.selectedUser}
            style={{
              width: "100%",
              margin: "4px 0px",
              boxSizing: "border-box",
            }}
          >
            Login
          </Button>
        </div>
      );
    } else return null;
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
