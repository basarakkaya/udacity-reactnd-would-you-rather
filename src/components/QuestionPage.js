import React from "react";
import Question from "./Question";

function QuestionPage({ match }) {
  const { question_id } = match.params;
  return (
    <div>
      <Question id={question_id} />
    </div>
  );
}

export default QuestionPage;
