import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Dashboard from "./Dashboard";
class QuestionsContainer extends Component {
  state = {
    showAnswered: false,
  };

  render() {
    return (
      <div>
        <h3>Would You Rather...?</h3>
        <Nav
          variant="tabs"
          defaultActiveKey="unanswered"
          activeKey={this.state.showAnswered ? "answered" : "unanswered"}
        >
          <Nav.Item>
            <Nav.Link
              onClick={() => this.setState({ showAnswered: false })}
              eventKey="unanswered"
            >
              Unanswered
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => this.setState({ showAnswered: true })}
              eventKey="answered"
            >
              Answered
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Dashboard showAnswered={this.state.showAnswered} />
      </div>
    );
  }
}

export default QuestionsContainer;
