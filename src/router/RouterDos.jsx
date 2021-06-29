import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "../components/Menu";

import GiftCards from "../pages/GiftCards";
import Home from "../pages/Home";

const RouterDos = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/giftcards" component={GiftCards} />

        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default RouterDos;
