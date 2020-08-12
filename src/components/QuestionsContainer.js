import React, { Component } from "react";
import Dashboard from "./Dashboard";
class QuestionsContainer extends Component {
  state = {
    showAnswered: false,
  };

  toggleAnswered = () => {
    this.setState((prevState) => ({
      showAnswered: !prevState.showAnswered,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleAnswered}>Toggle</button>
        <h3>
          {this.state.showAnswered
            ? "Answered Questions"
            : "Unanswered Questions"}
        </h3>
        <Dashboard showAnswered={this.state.showAnswered} />
      </div>
    );
  }
}

export default QuestionsContainer;
