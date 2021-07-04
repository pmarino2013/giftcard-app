import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "../components/Menu";
import Error404 from "../pages/Error404";
import GiftCards from "../pages/GiftCards";
import Home from "../pages/Home";

const RouterDos = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/giftcards" component={GiftCards} />
        <Route component={Error404} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default RouterDos;
