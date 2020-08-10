import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import history from "../utils/history";
import * as routes from "../constants/routes";

import Main from "./main";
import Favourites from "./favourites"

// const Favourites = () =><h2>I am Favourites.</h2>;
const AppRouter = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.HOME} component={Main} />
      <Route exact path={routes.FAVOURITES} component={Favourites} />
      {/* <MainRouter /> */}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
