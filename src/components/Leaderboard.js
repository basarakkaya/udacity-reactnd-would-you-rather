import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h3>Leaderboard</h3>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.questions.length} -{" "}
              {Object.keys(user.answers).length}
            </li>
          ))}
        </ul>
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
