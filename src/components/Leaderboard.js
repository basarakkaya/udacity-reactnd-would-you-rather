import React, { Component } from "react";
import { connect } from "react-redux";

import User from "./User";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h3>Leaderboard</h3>
        {this.props.users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .sort((a, b) => {
        const answersA = Object.keys(users[a].answers).length;
        const answersB = Object.keys(users[b].answers).length;
        const questionsA = users[a].questions.length;
        const questionsB = users[b].questions.length;

        return answersB + questionsB - (answersA + questionsA);
      })
      .map((id) => users[id]),
  };
}

export default connect(mapStateToProps)(Leaderboard);
