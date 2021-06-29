import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import RouterDos from "./router/RouterDos";
import Error404 from "./pages/Error404";
// import Menu from "./components/Menu";
// import Error404 from "./pages/Error404";
// import GiftCards from "./pages/GiftCards";
// import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        {/* <Menu /> */}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={RouterDos} />
          <Route component={Error404} />
          {/* <Route exact path="/giftcards" component={GiftCards} />
          <Route component={Error404} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
