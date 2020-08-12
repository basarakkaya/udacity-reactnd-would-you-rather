import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "./Question";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Would you rather...</h3>
        <ul>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { showAnswered }) {
  return {
    authedUser,
    questionIds: Object.keys(questions)
      .filter((question) => {
        if (showAnswered)
          return (
            questions[question].optionOne.votes.includes(authedUser) ||
            questions[question].optionTwo.votes.includes(authedUser)
          );
        else
          return (
            !questions[question].optionOne.votes.includes(authedUser) &&
            !questions[question].optionTwo.votes.includes(authedUser)
          );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
}

export default connect(mapStateToProps)(Dashboard);
