import React, { Component } from "react";
import Question from "./Question";

class QuestionPage extends Component {
  render() {
    const { question_id } = this.props.match.params;
    return (
      <div>
        <h3>Would you rather...</h3>
        <Question id={question_id} />
      </div>
    );
  }
}

export default QuestionPage;
