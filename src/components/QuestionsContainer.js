import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Dashboard from "./Dashboard";
class QuestionsContainer extends Component {
  state = {
    showAnswered: false,
  };

  render() {
    return (
      <div>
        <h3>Would You Rather...?</h3>
        <Card>
          <Card.Header>
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
          </Card.Header>
          <Card.Body>
            <Dashboard showAnswered={this.state.showAnswered} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default QuestionsContainer;
