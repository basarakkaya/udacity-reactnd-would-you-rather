import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(e.target.value));
  };

  render() {
    if (this.props.users) {
      const userIds = Object.keys(this.props.users);
      return (
        <div>
          <h3>Login</h3>
          {userIds.map((userId) => (
            <button value={userId} key={userId} onClick={this.handleLogin}>
              {userId}
            </button>
          ))}
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
