import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "./Question";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.questionIds.length > 0 ? (
          this.props.questionIds.map((id) => <Question id={id} key={id} />)
        ) : (
          <h5>No questions found to be listed.</h5>
        )}
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
