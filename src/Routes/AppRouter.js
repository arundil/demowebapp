import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router basename={"/subpath"}>
    </Router>
  );
}

export default AppRouter;