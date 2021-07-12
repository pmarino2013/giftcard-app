import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import RouterDos from "./router/RouterDos";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={RouterDos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
