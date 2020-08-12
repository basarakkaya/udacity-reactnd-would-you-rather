import React from "react";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";

function User({ user }) {
  const questions = user.questions.length;
  const answers = Object.keys(user.answers).length;

  return (
    <Card style={{ margin: "4px 0px" }}>
      <Card.Body>
        <Card.Title>
          <Avatar user={user} />
          {user.name}
        </Card.Title>
        <Card.Subtitle>{user.id}</Card.Subtitle>
        <Card.Text>
          Asked {questions} questions, Answered {answers} questions
        </Card.Text>
        <Card.Text>Total Score: {questions + answers}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default User;
