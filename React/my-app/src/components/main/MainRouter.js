import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Main";
import Abc from "./Assignment-2";
import Fourohfour from "../fourohfour";
import Assignment2 from "./Assignment-2";

const MainRouter = () => (
  <Switch>
    <Route exact path="/assignment2" component={Assignment2} />
    <Route exact path="/" component={Main} />
    <Route path="*" component={Fourohfour} />
  </Switch>
);

export default MainRouter;
