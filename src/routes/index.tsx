import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import NotFound from "../pages/404/404";
import HomeRoutes from "../pages/Auth/Routes";
import history from "./history";

const Routes = () => {
  return (
    <Router history={history}>
      <ScrollToTop />
      <Switch>
        <Route path="/dashboard">
          <HomeRoutes />
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
