import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { clearAuthedUser } from "../actions/authedUser";

class Navigation extends Component {
  // TODO: Create Nav element
  logout = () => {
    const { dispatch } = this.props;

    dispatch(clearAuthedUser());
  };

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Create</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Navigation);
