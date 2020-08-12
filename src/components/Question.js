import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { PersonCheckFill } from "react-bootstrap-icons";

import { handleAnswerQuestion } from "../actions/questions";

function OptionResult(props) {
  const isVoted = props.option.votes.includes(props.authedUser);

  return (
    <ListGroupItem>
      <p>
        {props.option.text}{" "}
        {isVoted ? (
          <PersonCheckFill
            color="#28a745"
            size={21}
            style={{ verticalAlign: "sub" }}
          />
        ) : null}
      </p>
      <ProgressBar
        label={`${props.info.percentage}% - ${props.info.number} votes`}
        now={props.info.percentage}
        variant={isVoted ? "success" : "info"}
        style={{ height: 32 }}
      />
    </ListGroupItem>
  );
}

class Question extends Component {
  handleAnswer = (e, answer) => {
    e.preventDefault();

    const { dispatch, question, authedUser } = this.props;
    dispatch(handleAnswerQuestion(authedUser, question.id, answer));
  };

  render() {
    const { authedUser, isAnswered, question } = this.props;
    let optionOneInfo, optionTwoInfo;

    if (isAnswered) {
      // TODO: Indicate the answered option
      const totalVotes =
        question.optionOne.votes.length + question.optionTwo.votes.length;

      optionOneInfo = {
        number: question.optionOne.votes.length,
        percentage: (
          (question.optionOne.votes.length / totalVotes) *
          100
        ).toFixed(1),
      };

      optionTwoInfo = {
        number: question.optionTwo.votes.length,
        percentage: (
          (question.optionTwo.votes.length / totalVotes) *
          100
        ).toFixed(1),
      };
    }

    return (
      <Card style={{ margin: "4px 0px" }}>
        <Card.Header>Asked by {question.author}</Card.Header>
        <Card.Body>
          {isAnswered ? (
            <ListGroup>
              <OptionResult
                option={question.optionOne}
                info={optionOneInfo}
                authedUser={authedUser}
              />
              <OptionResult
                option={question.optionTwo}
                info={optionTwoInfo}
                authedUser={authedUser}
              />
            </ListGroup>
          ) : (
            <React.Fragment>
              <Button
                variant="primary"
                onClick={(e) => this.handleAnswer(e, "optionOne")}
              >
                {question.optionOne.text}
              </Button>
              <h5>...or...</h5>
              <Button
                variant="primary"
                onClick={(e) => this.handleAnswer(e, "optionTwo")}
              >
                {question.optionTwo.text}
              </Button>
            </React.Fragment>
          )}
        </Card.Body>
      </Card>
    );
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
