import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import NotFound from "../pages/404/404";
import Login from "../pages/Auth/Login/Login";
import HomeRoutes from "../pages/Home/Routes";
import Index from "../pages/Index/Index";
import history from "./history";

const Routes = () => {
  return (
    <Router history={history}>
      <ScrollToTop />
      <Switch>
        <Route path="/home">
          <HomeRoutes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Index />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export { Routes };
