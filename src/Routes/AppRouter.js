import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


function AppRouter() {
  return (
    <Router basename={"/subpath"}>
    </Router>
  );
}

export default AppRouter;