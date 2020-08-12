import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  createQuestion = (e) => {
    e.preventDefault();

    const { dispatch, authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;

    dispatch(handleCreateQuestion(authedUser, optionOne, optionTwo));

    this.setState({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    });
  };

  render() {
    if (this.state.toHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3>New Question</h3>
        <form onSubmit={this.createQuestion}>
          <input
            name="optionOne"
            placeholder="optionOne"
            value={this.state.optionOne}
            onChange={(e) =>
              this.setState({
                optionOne: e.target.value,
              })
            }
          ></input>
          <input
            name="optionTwo"
            placeholder="optionTwo"
            value={this.state.optionTwo}
            onChange={(e) =>
              this.setState({
                optionTwo: e.target.value,
              })
            }
          ></input>
          <button
            type="submit"
            disabled={!(this.state.optionOne && this.state.optionTwo)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
