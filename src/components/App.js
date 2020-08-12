import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import LoadingBar from "react-redux-loading";
import Navigation from "./Navigation";
import QuestionsContainer from "./QuestionsContainer";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import Error404 from "./Error404";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ zIndex: 100 }} />
          <Navigation />
          <div className="container">
            {this.props.authed ? (
              <Switch>
                <Route exact path="/" component={QuestionsContainer} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/add" component={NewQuestion} />
                <Route
                  path="/questions/:question_id"
                  component={QuestionPage}
                />
                <Route path="*" component={Error404} />
              </Switch>
            ) : (
              <Login />
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authed: !!authedUser,
  };
}

export default connect(mapStateToProps)(App);
