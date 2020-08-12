import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { handleCreateQuestion } from "../actions/questions";

function Input(props) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id={`aria_${props.label}`}>
          {props.label}
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label={`aria_${props.label}`}
        aria-describedby={`aria_${props.label}`}
        {...props}
      />
    </InputGroup>
  );
}

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
        <h3>Would you rather...</h3>
        <form onSubmit={this.createQuestion}>
          <Input
            label="Option #1"
            name="optionOne"
            placeholder="Option #1"
            value={this.state.optionOne}
            onChange={(e) =>
              this.setState({
                optionOne: e.target.value,
              })
            }
          />
          <h5>...or...</h5>
          <Input
            label="Option #2"
            name="optionTwo"
            placeholder="Option #2"
            value={this.state.optionTwo}
            onChange={(e) =>
              this.setState({
                optionTwo: e.target.value,
              })
            }
          />
          <Button
            variant="primary"
            type="submit"
            disabled={!(this.state.optionOne && this.state.optionTwo)}
          >
            Submit
          </Button>
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
