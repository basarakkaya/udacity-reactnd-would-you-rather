import React from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Error404({ history }) {
  return (
    <React.Fragment>
      <h2>404 - The page you requested cannot be found.</h2>
      <Button onClick={() => history.push("/")} style={{ width: "100%" }}>
        Return to Home
      </Button>
    </React.Fragment>
  );
}

export default withRouter(Error404);
