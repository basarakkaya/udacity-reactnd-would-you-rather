import React, { Component } from "react";
import { connect } from "react-redux";

import { handleAnswerQuestion } from "../actions/questions";

class Question extends Component {
  handleAnswer = (e, answer) => {
    e.preventDefault();

    const { dispatch, question, authedUser } = this.props;
    dispatch(handleAnswerQuestion(authedUser, question.id, answer));
  };

  render() {
    const { isAnswered, question } = this.props;

    if (isAnswered) {
      const totalVotes =
        question.optionOne.votes.length + question.optionTwo.votes.length;

      const optionOneInfo = {
        number: question.optionOne.votes.length,
        percentage: (
          (question.optionOne.votes.length / totalVotes) *
          100
        ).toFixed(1),
      };

      const optionTwoInfo = {
        number: question.optionTwo.votes.length,
        percentage: (
          (question.optionTwo.votes.length / totalVotes) *
          100
        ).toFixed(1),
      };
      return (
        <div>
          <ul>
            <li>
              {question.optionOne.text} - {optionOneInfo.number} Votes -{" "}
              {optionOneInfo.percentage}%
            </li>
            <li>
              {question.optionTwo.text} - {optionTwoInfo.number} Votes -{" "}
              {optionTwoInfo.percentage}%
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={(e) => this.handleAnswer(e, "optionOne")}>
            {question.optionOne.text}
          </button>
          <button onClick={(e) => this.handleAnswer(e, "optionTwo")}>
            {question.optionTwo.text}
          </button>
        </div>
      );
    }
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question ? question : null,
    isAnswered:
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser),
  };
}

export default connect(mapStateToProps)(Question);
