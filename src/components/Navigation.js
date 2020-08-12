import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "./Avatar";

import { clearAuthedUser } from "../actions/authedUser";

class Navigation extends Component {
  state = {
    navActiveKey: "",
  };

  logout = () => {
    const { dispatch } = this.props;

    dispatch(clearAuthedUser());
  };

  setNavActiveKey = () => {
    this.setState({
      navActiveKey:
        this.props.location.pathname === "/"
          ? "home"
          : this.props.location.pathname,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setNavActiveKey();
    }
  }

  componentDidMount() {
    this.setNavActiveKey();
  }

  render() {
    const { user } = this.props;

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Would You Rather...?</Navbar.Brand>
        {!!user ? (
          <React.Fragment>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" activeKey={this.state.navActiveKey}>
                <Nav.Link as="div" eventKey="home">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link as="div" eventKey="/add">
                  <Link className="nav-link" to="/add">
                    Create
                  </Link>
                </Nav.Link>
                <Nav.Link as="div" eventKey="/leaderboard">
                  <Link className="nav-link" to="/leaderboard">
                    Leaderboard
                  </Link>
                </Nav.Link>
              </Nav>
              <Navbar.Text>
                Signed in as: {user.name} <Avatar user={user} />
              </Navbar.Text>
              <Nav.Link as="div">
                <Link className="nav-link" to="/" onClick={this.logout}>
                  Logout
                </Link>
              </Nav.Link>
            </Navbar.Collapse>
          </React.Fragment>
        ) : null}
      </Navbar>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser],
  };
}

export default withRouter(connect(mapStateToProps)(Navigation));
