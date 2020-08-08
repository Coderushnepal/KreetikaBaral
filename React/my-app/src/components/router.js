import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Main from "./main";
import MainRouter from "./main";
import Fourohfour from "./fourohfour/fourohfour";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
      <MainRouter />
      <Route path="*" component={Fourohfour} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
