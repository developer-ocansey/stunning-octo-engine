import { FunctionComponent } from "react";
import { Route, Router, Switch, useRouteMatch } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import NotFound from "../404/404";

import history from "./../../routes/history";
import Account from "./Account/Account";
import Books from "./Books/Books";
import Home from "./Home/Home";
import Read from "./Read/Read";

type RoutesProps = {
  globalState?: any;
};

const HomeRoutes: FunctionComponent<RoutesProps> = (params: any) => {
  let { path } = useRouteMatch();
  return (
    <>
      <Router history={history}>
        <ScrollToTop />
        <Switch>
          <Route exact path={`${path}/`}>
            <Home />
          </Route>
          <Route exact path={`${path}/account`}>
            <Account />
          </Route>
          <Route exact path={`${path}/read/:bookID`}>
            <Read />
          </Route>
          <Route exact path={`${path}/books`}>
            <Books />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default HomeRoutes;
